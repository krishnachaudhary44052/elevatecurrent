import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import './policy.css';
const policyContent = {
 '/privacy-policy': ['Privacy policy', 'FDHS Elevate respects your privacy. This page is a draft placeholder for the final privacy notice. Before launch, replace this text with the organisation’s approved details covering data collected, purposes, retention, sharing, user rights and contact information.'],
 '/terms': ['Terms of use', 'These draft terms explain that website information is general guidance and that services, eligibility, fees and programme conditions must be confirmed in writing before a user makes a commitment. Replace this placeholder with the organisation’s approved terms before launch.'],
 '/cookies': ['Cookie policy', 'This draft placeholder should be updated to describe the cookies and similar technologies used by the live website, why they are used, how consent is collected where required, and how visitors can manage their preferences.'],
 '/disclaimer': ['Disclaimer', 'Website content is provided for general information and does not guarantee employment, admission, licensing, recognition, visa approval or any particular outcome. Requirements may change and should be checked with the relevant official authority.']
};
export default function PolicyPage({ path }) {
 const key = path.replace(/\/+$/, '') || '/privacy-policy';
 const [title, body] = policyContent[key] || policyContent['/disclaimer'];
 return <div className="policy-page"><Header/><main className="policy-content"><p className="policy-eyebrow">FDHS ELEVATE · WEBSITE INFORMATION</p><h1>{title}</h1><p>{body}</p><p>For questions, contact <a href="mailto:admin@fdhs.in">admin@fdhs.in</a>.</p><a className="policy-back" href="/">Return to homepage →</a></main><Footer/></div>;
}
