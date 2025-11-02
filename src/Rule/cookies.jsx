import React from 'react';
import { Cookie, Shield, Eye, Settings, Trash2, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Cookies = () => {
  const cookieTypes = [
    {
      icon: Shield,
      name: "Essential Cookies",
      description: "Required for basic website functionality",
      purpose: "Enable core features like page navigation and secure areas",
      duration: "Session",
      mandatory: true
    },
    {
      icon: Eye,
      name: "Analytics Cookies",
      description: "Help us understand how visitors interact",
      purpose: "Collect anonymous data for website improvement",
      duration: "2 years",
      mandatory: false
    },
    {
      icon: Settings,
      name: "Preference Cookies",
      description: "Remember your settings and choices",
      purpose: "Store your language and display preferences",
      duration: "1 year",
      mandatory: false
    },
    {
      icon: Cookie,
      name: "Marketing Cookies",
      description: "Used for targeted advertising",
      purpose: "Track effectiveness of marketing campaigns",
      duration: "90 days",
      mandatory: false
    }
  ];

  const cookieControls = [
    {
      title: "Browser Settings",
      description: "Manage cookies through your web browser preferences",
      instruction: "Check your browser's help section for cookie management"
    },
    {
      title: "Opt-out Tools",
      description: "Use industry-standard opt-out mechanisms",
      instruction: "Visit AdChoices or Your Online Choices for advertising cookies"
    },
    {
      title: "Direct Contact",
      description: "Request cookie preferences directly from us",
      instruction: "Email privacy@ajalgarage.com for manual preferences"
    }
  ];

  const lastUpdated = "January 1, 2024";

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Banner */}
  
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Last Updated */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{marginTop:"10%"}}
        >
          <div className="bg-stone-900 border border-amber-800 rounded-xl p-4 inline-block">
            <p className="text-amber-400 text-sm">
              Last Updated: <span className="font-semibold">{lastUpdated}</span>
            </p>
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div 
          className="bg-stone-900 border border-amber-800 rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <div className="bg-amber-500/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Cookie className="h-8 w-8 text-amber-400" />
            </div>
            <h2 className="text-3xl font-bold text-amber-50 mb-4">Our Cookies Policy</h2>
          </div>
          
          <div className="space-y-4 text-amber-200 leading-relaxed">
            <p>
              At Ajal Garage, we use cookies and similar technologies to enhance your browsing experience, 
              analyze website traffic, and understand where our visitors come from. This policy explains 
              what cookies are, how we use them, and how you can manage your preferences.
            </p>
            <p>
              By using our website, you consent to the use of cookies in accordance with this policy. 
              You can adjust your cookie settings at any time through your browser or our preference center.
            </p>
            <p>
              We are committed to being transparent about our use of cookies and respecting your privacy choices.
            </p>
          </div>
        </motion.div>

        {/* What are Cookies */}
        <motion.div 
          className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-800 rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-amber-50 mb-6 text-center">What Are Cookies?</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Small Text Files",
                description: "Cookies are small pieces of data stored on your device",
                icon: "📄"
              },
              {
                title: "Website Memory",
                description: "They help websites remember your actions and preferences",
                icon: "💾"
              },
              {
                title: "Temporary Storage",
                description: "Some are session-based, others persist for longer periods",
                icon: "⏰"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="text-amber-100 font-semibold mb-2">{item.title}</h4>
                <p className="text-amber-300 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cookie Types */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-amber-50 mb-8 text-center">Types of Cookies We Use</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {cookieTypes.map((cookie, index) => {
              const Icon = cookie.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-stone-900 border border-amber-800 rounded-xl p-6 hover:border-amber-600 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-lg ${cookie.mandatory ? 'bg-amber-500/20' : 'bg-orange-500/20'}`}>
                      <Icon className={`h-6 w-6 ${cookie.mandatory ? 'text-amber-400' : 'text-orange-400'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="text-xl font-bold text-amber-50">{cookie.name}</h4>
                        {cookie.mandatory && (
                          <span className="bg-amber-500/20 text-amber-400 text-xs px-2 py-1 rounded-full border border-amber-500/30">
                            Required
                          </span>
                        )}
                      </div>
                      <p className="text-amber-300 text-sm mb-2">{cookie.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-amber-200 text-sm">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0" />
                      <span><strong>Purpose:</strong> {cookie.purpose}</span>
                    </div>
                    <div className="flex items-center gap-2 text-amber-200 text-sm">
                      <Clock className="h-4 w-4 text-amber-400" />
                      <span><strong>Duration:</strong> {cookie.duration}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Cookie Management */}
        <motion.div 
          className="bg-stone-900 border border-amber-800 rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-amber-50 mb-6 text-center">Managing Your Cookie Preferences</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {cookieControls.map((control, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-amber-500/20 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-6 w-6 text-amber-400" />
                </div>
                <h4 className="text-amber-100 font-semibold mb-2">{control.title}</h4>
                <p className="text-amber-300 text-sm mb-3">{control.description}</p>
                <p className="text-amber-400 text-xs">{control.instruction}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact of Disabling */}
        <motion.div 
          className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-800 rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-amber-50 mb-6 text-center">Impact of Disabling Cookies</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="bg-red-500/20 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Trash2 className="h-6 w-6 text-red-400" />
              </div>
              <h4 className="text-amber-100 font-semibold mb-2">Essential Cookies</h4>
              <p className="text-amber-300 text-sm">
                Website may not function properly. Core features like login and navigation may be affected.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500/20 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Eye className="h-6 w-6 text-orange-400" />
              </div>
              <h4 className="text-amber-100 font-semibold mb-2">Non-Essential Cookies</h4>
              <p className="text-amber-300 text-sm">
                Personalized features and analytics will be disabled, but basic functionality remains.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Updates & Contact */}
        <motion.div 
          className="bg-stone-900 border border-amber-800 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-amber-50 mb-6 text-center">Updates & Contact</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="bg-amber-500/20 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-amber-400" />
              </div>
              <h4 className="text-amber-100 font-semibold mb-2">Policy Updates</h4>
              <p className="text-amber-300 text-sm mb-2">
                We regularly review and update our cookies policy
              </p>
              <p className="text-amber-400 text-sm">
                Check this page for the latest information
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500/20 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-orange-400" />
              </div>
              <h4 className="text-amber-100 font-semibold mb-2">Privacy Questions</h4>
              <p className="text-amber-300 text-sm mb-2">
                Contact our privacy team for cookie-related inquiries
              </p>
              <a 
                href="mailto:privacy@ajalgarage.com" 
                className="text-orange-400 hover:text-orange-300 transition-colors text-sm"
              >
                privacy@ajalgarage.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-amber-400 text-sm">
            This Cookies Policy is effective as of {lastUpdated} and may be updated from time to time.
          </p>
          <p className="text-amber-300 text-xs mt-2">
            © 2024 Ajal Garage. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Cookies;