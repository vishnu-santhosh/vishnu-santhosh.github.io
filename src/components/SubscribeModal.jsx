import { useEffect } from 'react';

export default function SubscribeModal({ isOpen, onClose, url }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80" />
      
      <div 
        className="relative w-full max-w-lg bg-terminal-black border-2 border-terminal-green rounded-lg shadow-lg overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-terminal-green/30 p-4">
          <h2 className="text-lg font-bold text-terminal-green">
            ## Subscribe to the newsletter
          </h2>
          <button
            onClick={onClose}
            className="text-terminal-green hover:text-terminal-cyan transition-colors cursor-pointer"
            title="Close"
          >
            [X]
          </button>
        </div>

        <div className="p-4">
          <p className="text-gray-400 text-sm mb-4">
            Get Linux & kernel insights delivered to your inbox.
          </p>
          <iframe
            src={`${url}/embed`}
            width="100%"
            height="320"
            style={{ border: '1px solid #333', background: '#0a0a0a' }}
            frameBorder="0"
            scrolling="no"
            title="Subscribe to newsletter"
          />
        </div>
      </div>
    </div>
  );
}
