// FILE: src/components/FeaturesSection.tsx
import React from 'react';
import Icon from './ui/Icon';

const FeatureCard = ({ iconPath, title, subtitle }: { iconPath: string; title: string; subtitle: string }) => (
  <div className="flex items-center gap-4">
    <Icon path={iconPath} className="w-10 h-10 text-gray-700" />
    <div>
      <h3 className="font-bold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
  </div>
);

const FeaturesSection = () => (
  <div className="bg-gray-100 pt-24 pb-12">
    <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
      <FeatureCard iconPath="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l2-2A10,10,0,1,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" title="Free Battery Testing" subtitle="Diagnose any issues accurately" />
      <FeatureCard iconPath="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l2-2A10,10,0,1,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" title="Free Fitment" subtitle="Professional installation" />
      <FeatureCard iconPath="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l2-2A10,10,0,1,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" title="Jump-Start Service" subtitle="Local Alberton area" />
      <FeatureCard iconPath="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l2-2A10,10,0,1,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" title="Battery Charging" subtitle="Safe and effective" />
    </div>
  </div>
);

export default FeaturesSection;