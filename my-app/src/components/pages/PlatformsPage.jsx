import React, { useState } from 'react';
import { ExternalLink, Settings, Plus, CheckCircle, AlertCircle } from 'lucide-react';

const PlatformsPage = () => {
    const [connectedPlatforms, setConnectedPlatforms] = useState(new Set(['google-analytics', 'stripe', 'quickbooks']));

    const platforms = [
        {
            id: 'google-analytics',
            name: 'Google Analytics',
            category: 'Analytics',
            description: 'Web analytics and reporting',
            logo: '📊',
            color: 'bg-orange-500',
            status: 'connected'
        },
        {
            id: 'stripe',
            name: 'Stripe Payments',
            category: 'Payments',
            description: 'Online payment processing',
            logo: '💳',
            color: 'bg-purple-600',
            status: 'connected'
        },
        {
            id: 'paypal',
            name: 'PayPal Payments',
            category: 'Payments',
            description: 'PayPal Braintree integration',
            logo: '🅿️',
            color: 'bg-blue-600',
            status: 'available'
        },
        {
            id: 'highlevel-crm',
            name: 'High Level CRM',
            category: 'CRM',
            description: 'Customer relationship management',
            logo: '📈',
            color: 'bg-black',
            status: 'available'
        },
        {
            id: 'quickbooks',
            name: 'Quickbooks',
            category: 'Accounting',
            description: 'Financial management and accounting',
            logo: '💚',
            color: 'bg-green-600',
            status: 'connected'
        },
        {
            id: 'instantly',
            name: 'Instantly',
            category: 'Email Marketing',
            description: 'Email outreach and automation',
            logo: '⚡',
            color: 'bg-blue-500',
            status: 'available'
        },
        {
            id: 'google-ads',
            name: 'Google Ads',
            category: 'Advertising',
            description: 'Google advertising platform',
            logo: '🎯',
            color: 'bg-yellow-500',
            status: 'available'
        },
        {
            id: 'facebook-ads',
            name: 'Facebook Ads',
            category: 'Advertising',
            description: 'Facebook advertising platform',
            logo: '📘',
            color: 'bg-blue-700',
            status: 'available'
        }
    ];

    const categories = [...new Set(platforms.map(p => p.category))];

    const handleConnect = (platformId) => {
        if (connectedPlatforms.has(platformId)) {
            setConnectedPlatforms(prev => {
                const newSet = new Set(prev);
                newSet.delete(platformId);
                return newSet;
            });
        } else {
            setConnectedPlatforms(prev => new Set([...prev, platformId]));
        }
    };

    const getPlatformStatus = (platformId) => {
        return connectedPlatforms.has(platformId) ? 'connected' : 'available';
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
            <div className="w-full px-4 max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">My Platforms</h1>
                    <p className="text-gray-600 text-lg">
                        Connect and manage all your business platforms in one place. Streamline your workflow with seamless integrations.
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-xl p-6 shadow-lg border">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm font-medium">Connected Platforms</p>
                                <p className="text-3xl font-bold text-green-600">{connectedPlatforms.size}</p>
                            </div>
                            <CheckCircle className="h-12 w-12 text-green-500" />
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg border">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm font-medium">Available Platforms</p>
                                <p className="text-3xl font-bold text-blue-600">{platforms.length - connectedPlatforms.size}</p>
                            </div>
                            <Plus className="h-12 w-12 text-blue-500" />
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg border">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm font-medium">Categories</p>
                                <p className="text-3xl font-bold text-purple-600">{categories.length}</p>
                            </div>
                            <Settings className="h-12 w-12 text-purple-500" />
                        </div>
                    </div>
                </div>

                {/* Platforms Grid by Category */}
                {categories.map(category => (
                    <div key={category} className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                            <span className="mr-3">{category}</span>
                            <div className="h-px bg-gray-300 flex-1"></div>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {platforms
                                .filter(platform => platform.category === category)
                                .map((platform) => {
                                    const isConnected = getPlatformStatus(platform.id) === 'connected';

                                    return (
                                        <div
                                            key={platform.id}
                                            className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${isConnected ? 'border-green-200 bg-green-50/30' : 'border-gray-200 hover:border-blue-300'
                                                }`}
                                        >
                                            {/* Platform Logo and Status */}
                                            <div className="p-6 pb-4">
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className={`w-16 h-16 ${platform.color} rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                                                        {platform.logo}
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        {isConnected ? (
                                                            <div className="flex items-center space-x-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                                                                <CheckCircle className="h-3 w-3" />
                                                                <span>Connected</span>
                                                            </div>
                                                        ) : (
                                                            <div className="flex items-center space-x-1 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                                                                <AlertCircle className="h-3 w-3" />
                                                                <span>Available</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Platform Info */}
                                                <h3 className="text-lg font-bold text-gray-800 mb-2">{platform.name}</h3>
                                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{platform.description}</p>

                                                {/* Category Badge */}
                                                <div className="mb-4">
                                                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                                                        {platform.category}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="px-6 pb-6">
                                                <div className="flex space-x-2">
                                                    <button
                                                        onClick={() => handleConnect(platform.id)}
                                                        className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${isConnected
                                                                ? 'bg-red-500 hover:bg-red-600 text-white'
                                                                : 'bg-blue-600 hover:bg-blue-700 text-white'
                                                            }`}
                                                    >
                                                        {isConnected ? 'Disconnect' : 'Connect'}
                                                    </button>
                                                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                                                        <Settings className="h-4 w-4" />
                                                    </button>
                                                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                                                        <ExternalLink className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                ))}
                {/* Integration Guide */}
                <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
                    <h2 className="text-2xl font-bold mb-4">Need Help with Integration?</h2>
                    <p className="text-blue-100 mb-6">
                        Our integration guides help you connect your platforms quickly and securely. Get step-by-step instructions for each platform.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                            View Integration Guide
                        </button>
                        <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                            Contact Support
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlatformsPage;