// src/components/ContactClientWrapper.jsx
'use client'
import dynamic from 'next/dynamic';

const Contact = dynamic(() => import('./Contact'), {
  ssr: false,
  loading: () => <p>Cargando contacto...</p>,
});

export default function ContactClientWrapper() {
  return <Contact />;
}
