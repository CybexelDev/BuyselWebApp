import React, { useState, useRef } from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import {
    User, Lock, Save, Globe, MapPin, Phone,
    Mail, Share2, Briefcase, Building2,
    CheckCircle2, ShieldCheck, Camera, FileText, Check, Type
} from 'lucide-react';
import { motion } from 'framer-motion';

const AgentProfileLayout = () => {
    const fileInputRef = useRef(null);
    const [profileImage, setProfileImage] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isDirty, setIsDirty] = useState(false);
    const [formData, setFormData] = useState({
        name: 'Arun Kumar',
        title: 'Senior Real Estate Agent', // Professional Title
        number: '+91 98765 43210', // Mobile Number
        location: 'Coimbatore, TN',
        buySelId: 'BUYSEL-99201',
        email: 'arun.k@buysel.in',
        socialMedia: '@arun_realty',
        description: 'Specializing in high-end residential and strategic industrial properties across Tamil Nadu.',
        specializations: ['Residential', 'Industrial'],
        operatingCities: 'Coimbatore, Chennai, Thalassery',
    });

    const specializationOptions = [
        { id: 1, label: 'Residential' },
        { id: 2, label: 'Plot/Land' },
        { id: 3, label: 'Industrial' },
        { id: 4, label: 'Commercial' }
    ];



    const [originalData, setOriginalData] = useState(formData);
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => {
            const updated = { ...prev, [name]: value };

            if (JSON.stringify(updated) !== JSON.stringify(originalData)) {
                setIsDirty(true);
            } else {
                setIsDirty(false);
            }

            return updated;
        });
    };

  const toggleSpecialization = (label) => {
    setFormData(prev => {
        const current = prev.specializations;

        const updatedSpecializations = current.includes(label)
            ? current.filter(item => item !== label)
            : [...current, label];

        const updated = {
            ...prev,
            specializations: updatedSpecializations
        };

        setIsDirty(JSON.stringify(updated) !== JSON.stringify(originalData));

        return updated;
    });
};

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setProfileImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {

        // API CALL HERE

        setOriginalData(formData);
        setIsEditing(false);
        setIsDirty(false);
    };
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex overflow-x-hidden">
            <Sidebar />

            <main className="flex-1  w-full min-h-screen transition-all duration-300">
                <div className="w-full max-w-7xl p-6 md:p-10 lg:p-12">

                    <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                            <div className="flex items-center gap-2 text-[#6ABD11] font-bold text-xs uppercase tracking-[0.2em] mb-2">
                                <span className="h-1 w-8 bg-[#6ABD11] rounded-full" />
                                Agent Settings
                            </div>

                            <h1 className="text-3xl  font-black text-slate-900 tracking-tight instrument-sans">
                                Profile <span className="text-[#6ABD11]">Settings</span>
                            </h1>
                        </motion.div>

                        {/* RIGHT SIDE */}
                        <div className="flex items-center gap-4">

                            {/* EDIT BUTTON */}
                            {!isEditing && (
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="px-6 py-3 bg-[#6ABD11] text-white rounded-xl text-sm font-bold shadow hover:bg-[#5aa30e] transition"
                                >
                                    Edit Profile
                                </button>
                            )}

                            {/* BUYSEL ID CARD */}
                            <div className="bg-white border border-slate-200 px-6 py-3 rounded-2xl shadow-sm flex items-center gap-4">
                                <div className="text-right border-r border-slate-100 pr-4">
                                    <span className="block text-[10px] font-bold text-[#6ABD11] uppercase tracking-widest host-grotesk">
                                        Buysel ID
                                    </span>
                                    <span className="text-sm host-grotesk font-bold text-slate-700">
                                        {formData.buySelId}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 text-[#6ABD11]">
                                    <ShieldCheck size={20} />
                                    <span className="text-xs font-bold uppercase instrument-sans">
                                        Verified
                                    </span>
                                </div>
                            </div>

                        </div>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        <div className="lg:col-span-8 space-y-8">

                            {/* Identity Section */}
                            <section className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-sm">
                                <div className="flex flex-col md:flex-row md:items-center gap-8 mb-10 pb-8 border-b border-slate-50">
                                    <div className="relative group mx-auto md:mx-0">
                                        <div className="w-32 h-32 rounded-3xl overflow-hidden border-4 border-slate-50 bg-slate-100 shadow-inner">
                                            {profileImage ? (
                                                <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-slate-300">
                                                    <User size={48} />
                                                </div>
                                            )}
                                        </div>
                                        <input type="file" ref={fileInputRef} onChange={handleImageChange} accept="image/*" className="hidden" />
                                        <button onClick={() => isEditing && fileInputRef.current.click()} className="absolute -bottom-2 -right-2 p-2.5 bg-[#6ABD11] text-white rounded-xl shadow-lg hover:scale-110 transition-all">
                                            <Camera size={18} />
                                        </button>
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h3 className="text-2xl font-bold text-slate-800 instrument-sans">{formData.name}</h3>
                                        <p className="text-[#6ABD11] font-bold text-sm host-grotesk">{formData.title}</p>
                                        <p className="text-slate-400 text-xs mt-1 font-medium">{formData.number}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} icon={<User size={18}
                                    />} disabled={!isEditing} />
                                    <InputField label="Professional Title" disabled={!isEditing}
                                        name="title" value={formData.title} onChange={handleChange} icon={<Type size={18} />} />
                                    <InputField label="Mobile Number" name="number" disabled={!isEditing}
                                        value={formData.number} onChange={handleChange} icon={<Phone size={18} />} />
                                    <InputField label="Email Address" name="email" disabled={!isEditing}
                                        value={formData.email} onChange={handleChange} icon={<Mail size={18} />} />
                                    <InputField label="Location" name="location" disabled={!isEditing}
                                        value={formData.location} onChange={handleChange} icon={<MapPin size={18} />} />
                                    <InputField label="Social Media" name="socialMedia" disabled={!isEditing}
                                        value={formData.socialMedia} onChange={handleChange} icon={<Share2 size={18} />} />
                                </div>
                            </section>

                            {/* Professional Profile Section */}
                            <section className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-sm">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-3 bg-[#6ABD11]/10 rounded-2xl">
                                        <Briefcase size={24} className="text-[#6ABD11]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#6ABD11] instrument-sans">Professional Details</h3>
                                </div>

                                <div className="space-y-8">
                                    {/* Bio Description */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center ml-1">
                                            <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest host-grotesk">
                                                Professional Bio
                                            </label>
                                            <span className="text-[10px] font-bold text-slate-300 tracking-widest">
                                                {formData.description.length}/300
                                            </span>
                                        </div>
                                        <div className="relative">
                                            <FileText className="absolute left-4 top-4 text-slate-300" size={18} />
                                            <textarea
                                                name="description"
                                                value={formData.description}
                                                onChange={handleChange}
                                                disabled={!isEditing}
                                                maxLength={300}
                                                placeholder="Describe your expertise..."
                                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 pl-12 text-sm font-medium text-slate-700 outline-none focus:border-[#6ABD11] focus:ring-4 focus:ring-[#6ABD11]/5 transition-all min-h-[120px] host-grotesk resize-none"
                                            />
                                        </div>
                                    </div>

                                    {/* Multi-Select Specialization */}
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-widest host-grotesk">
                                            Specializations (Select Multiple)
                                        </label>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                            {specializationOptions.map((opt) => {
                                                const isSelected = formData.specializations.includes(opt.label);
                                                return (
                                                    <button
                                                        key={opt.id}
                                                        onClick={() => isEditing && toggleSpecialization(opt.label)} className={`flex items-center justify-between p-3 rounded-xl border-2 transition-all text-xs font-bold ${isSelected
                                                            ? 'border-[#6ABD11] bg-[#6ABD11]/5 text-[#6ABD11]'
                                                            : 'border-slate-100 bg-slate-50 text-slate-400 hover:border-slate-200'
                                                            }`}
                                                    >
                                                        {opt.label}
                                                        {isSelected && <Check size={14} strokeWidth={3} />}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    <InputField label="Operating Cities" name="operatingCities" value={formData.operatingCities} onChange={handleChange} icon={<Building2 size={18} />} />
                                </div>
                            </section>
                            {isEditing && isDirty && (

                                <div className="flex justify-end pt-4">
                                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="bg-[#6ABD11] text-white px-12 py-5 rounded-2xl font-bold flex items-center gap-3 shadow-xl shadow-[#6ABD11]/20 hover:bg-[#5aa30e] transition-all">
                                        <Save size={20} /> Save Changes
                                    </motion.button>
                                </div>
                            )}

                        </div>

                        <aside className="lg:col-span-4 space-y-6">
                            <section className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-sm">
                                <div className="flex items-center gap-3 mb-6">
                                    <Lock size={20} className="text-[#6ABD11]" />
                                    <h3 className="text-lg font-bold text-slate-800 instrument-sans">Security</h3>
                                </div>
                                <div className="space-y-4">
                                    <PasswordField label="Current Password" />
                                    <PasswordField label="New Password" />
                                    <PasswordField label="Confirm Password" />
                                    <button className="w-full py-4 mt-2 text-[#6ABD11] font-bold text-xs uppercase tracking-widest border-2 border-[#6ABD11]/20 rounded-2xl hover:bg-[#6ABD11] hover:text-white transition-all">
                                        Update Password
                                    </button>
                                </div>
                            </section>

                      
                        </aside>
                    </div>
                </div>
            </main>
        </div>
    );
};

const InputField = ({ label, name, value, onChange, icon, type = "text", disabled }) => (
    <div className="space-y-2 group">
        <label className="text-[10px] font-bold uppercase text-[#6ABD11] ml-1 tracking-widest group-focus-within:text-[#6ABD11] transition-colors host-grotesk">{label}</label>
        <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#6ABD11] transition-colors">{icon}</div>
            <input type={type} name={name} disabled={disabled}
                value={value} onChange={onChange} className="w-full bg-slate-50 shadow-md rounded-2xl p-4 pl-12 text-sm font-medium text-slate-700 outline-none focus:border-[#6ABD11] focus:ring-4 focus:ring-[#6ABD11]/5 transition-all host-grotesk" />
        </div>
    </div>
);

const PasswordField = ({ label }) => (
    <div className="space-y-1">
        <label className="text-[10px] font-bold text-[#6ABD11] ml-1 uppercase host-grotesk">{label}</label>
        <input type="password" placeholder="••••••••" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:border-[#6ABD11] outline-none transition-all" />
    </div>
);

export default AgentProfileLayout;