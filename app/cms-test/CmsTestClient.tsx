'use client';

import { useState, useEffect } from 'react';
import { fetchFromCms } from '@/lib/plasmic';

interface CmsTestClientProps {
  collectionName?: string;
}

export default function CmsTestClient({ collectionName = 'blog' }: CmsTestClientProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState<string>('');
  const [item, setItem] = useState<any>(null);

  useEffect(() => {
    const checkCms = async () => {
      setStatus('loading');
      setMessage('');
      setItem(null);
      try {
        const data = await fetchFromCms(collectionName, { limit: 1 });
        if (Array.isArray(data) && data.length > 0) {
          setStatus('success');
          setItem(data[0]);
        } else if (Array.isArray(data) && data.length === 0) {
          setStatus('error');
          setMessage('No blog items found.');
        } else if (data && typeof data === 'object' && 'error' in data) {
          setStatus('error');
          setMessage((typeof data.error === 'string' ? data.error : JSON.stringify(data.error)) || 'Unknown error');
        } else {
          setStatus('error');
          setMessage('Unexpected response');
        }
      } catch (e: any) {
        setStatus('error');
        setMessage(e?.message || 'Error connecting to CMS');
      }
    };
    checkCms();
  }, [collectionName]);

  if (status === 'loading') return <div>Connecting to CMS...</div>;
  if (status === 'error') return <div style={{color:'red'}}>CMS Error: {message}</div>;
  if (status === 'success') return (
    <div>
      <div>CMS Connection OK! Fetched 1 blog item:</div>
      <pre style={{background:'#f1f1f1', padding:'8px', borderRadius:'4px', fontSize:'12px'}}>{JSON.stringify(item, null, 2)}</pre>
    </div>
  );
  return null;
}
