import { Cloud, Shield, Code, Layers } from 'lucide-react';

export const servicesData = [
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure & Migration',
    icon: Cloud,
    description: 'Modernize legacy workloads, establish landing zones, and construct reliable, automated hybrid cloud systems on Azure and AWS.',
    ctaText: 'Learn more'
  },
  {
    id: 'cybersecurity-governance',
    name: 'Cybersecurity & IAM Governance',
    icon: Shield,
    description: 'Ensure compliance and safeguard data with identity configurations, threat-modeling, audit-logging, and network-hardening structures.',
    ctaText: 'Learn more'
  },
  {
    id: 'custom-enterprise-apps',
    name: 'Custom Cloud-Native Applications',
    icon: Code,
    description: 'Build fast, scalable react web apps and backend API services, utilizing serverless functions, microservices, and modern frameworks.',
    ctaText: 'Learn more'
  },
  {
    id: 'digital-strategy-consulting',
    name: 'Digital Strategy & IT Architecture',
    icon: Layers,
    description: 'Design software topologies, configure DevOps build chains, and build comprehensive technical blueprints for modernization goals.',
    ctaText: 'Learn more'
  }
];
export default servicesData;
