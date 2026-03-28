import { useParams, Link } from 'react-router';
import { mockCandidates, CandidateStatus } from '../data/candidates';
import { ThemeToggle } from '../components/ThemeToggle';
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  GraduationCap,
  Calendar,
  Star,
  CheckCircle,
  XCircle,
  MessageSquare,
  Send,
  FileText,
  TrendingUp,
  Award,
  Users
} from 'lucide-react';
import { useState } from 'react';

const statusColors: Record<CandidateStatus, string> = {
  'New': 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-700',
  'Reviewed': 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-700',
  'Shortlisted': 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-700',
  'Interview': 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-700',
  'Accepted': 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-700',
  'Rejected': 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border-red-200 dark:border-red-700',
};

export function CandidateDetail() {
  const { id } = useParams();
  const candidate = mockCandidates.find(c => c.id === id);
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [emailTemplate, setEmailTemplate] = useState('');

  if (!candidate) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <XCircle className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Candidate Not Found</h2>
          <Link to="/" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const generateEmailTemplate = (type: 'accept' | 'reject' | 'info' | 'interview') => {
    const templates = {
      accept: `Dear ${candidate.name.split(' ')[0]},

We are pleased to inform you that your application has been accepted for an internship position.

Your ${candidate.aiAnalysis.profileType} profile with expertise in ${candidate.aiAnalysis.skills.slice(0, 3).join(', ')} aligns perfectly with our current needs.

We would like to begin our collaboration as soon as possible. Could you please confirm your availability?

Best regards,
Recruitment Team`,
      
      reject: `Dear ${candidate.name.split(' ')[0]},

Thank you for your interest in our company and for the time you dedicated to your application.

After careful review of your profile, we are unable to proceed with your application at this time. ${
  candidate.aiAnalysis.score < 6 
    ? "We encourage you to continue developing your skills and consider reapplying in the future." 
    : "Your profile shows promise, and we encourage you to apply for future opportunities."
}

We wish you the best in your search.

Best regards,
Recruitment Team`,
      
      info: `Dear ${candidate.name.split(' ')[0]},

Thank you for your application which has caught our attention.

To better evaluate your ${candidate.aiAnalysis.profileType} profile, we would need some additional information:

• Your availability for an internship
• More details about your "${candidate.projects[0]}" project
• Your expectations regarding this internship

Looking forward to hearing from you.

Best regards,
Recruitment Team`,
      
      interview: `Dear ${candidate.name.split(' ')[0]},

Your application has caught our attention, particularly your experience with ${candidate.aiAnalysis.skills[0]} and ${candidate.aiAnalysis.skills[1]}.

We would like to meet with you to discuss your background and our projects.

Would you be available this week or next week for an interview (video call or in-person)?

Please confirm your availability.

Best regards,
Recruitment Team`
    };
    
    return templates[type];
  };

  const handleAction = (action: string) => {
    setSelectedAction(action);
    if (['accept', 'reject', 'info', 'interview'].includes(action)) {
      setEmailTemplate(generateEmailTemplate(action as any));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Link>
            <ThemeToggle />
          </div>
          
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{candidate.name}</h1>
                <span className={`px-3 py-1 text-sm font-medium rounded-full border ${statusColors[candidate.status]}`}>
                  {candidate.status}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                {candidate.school} • Applied {new Date(candidate.appliedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className={`text-center px-6 py-3 rounded-xl border-2 ${
                candidate.aiAnalysis.score >= 8 ? 'bg-green-50 dark:bg-green-900/20 border-green-500 dark:border-green-600' :
                candidate.aiAnalysis.score >= 6 ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500 dark:border-yellow-600' : 
                'bg-red-50 dark:bg-red-900/20 border-red-500 dark:border-red-600'
              }`}>
                <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Evaluation Score</div>
                <div className={`text-3xl font-bold ${
                  candidate.aiAnalysis.score >= 8 ? 'text-green-600 dark:text-green-400' :
                  candidate.aiAnalysis.score >= 6 ? 'text-yellow-600 dark:text-yellow-400' : 'text-red-600 dark:text-red-400'
                }`}>
                  {candidate.aiAnalysis.score}<span className="text-lg">/10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Info */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <a href={`mailto:${candidate.email}`} className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">
                    {candidate.email}
                  </a>
                </div>
                {candidate.phone && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </div>
                    <a href={`tel:${candidate.phone}`} className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">
                      {candidate.phone}
                    </a>
                  </div>
                )}
                {candidate.linkedinUrl && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </div>
                    <a href={candidate.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">
                      LinkedIn Profile
                    </a>
                  </div>
                )}
                {candidate.portfolio && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <Github className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </div>
                    <a href={candidate.portfolio} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">
                      Portfolio / GitHub
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Profile Analysis */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Profile Analysis</h2>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Profile Type</div>
                  <div className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">{candidate.aiAnalysis.profileType}</div>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Experience Level</div>
                  <div className="text-lg font-semibold text-purple-600 dark:text-purple-400 capitalize">{candidate.aiAnalysis.level}</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <h3 className="font-medium text-gray-900 dark:text-white">Strengths</h3>
                </div>
                <ul className="space-y-2">
                  {candidate.aiAnalysis.strengths.map((strength, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              {candidate.aiAnalysis.weaknesses.length > 0 && (
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                    <h3 className="font-medium text-gray-900 dark:text-white">Areas for Improvement</h3>
                  </div>
                  <ul className="space-y-2">
                    {candidate.aiAnalysis.weaknesses.map((weakness, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <span className="text-orange-500 dark:text-orange-400 mt-0.5">⚠</span>
                        {weakness}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <Award className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-1">Recommendation</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{candidate.aiAnalysis.recommendation}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
              <div className="flex flex-wrap gap-2">
                {candidate.aiAnalysis.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 text-sm font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Projects ({candidate.projects.length})</h2>
              <ul className="space-y-3">
                {candidate.projects.map((project, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <FileText className="w-5 h-5 text-gray-400 dark:text-gray-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{project}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Notes */}
            {candidate.notes && (
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Internal Notes</h2>
                <p className="text-sm text-gray-700 dark:text-gray-300">{candidate.notes}</p>
              </div>
            )}
          </div>

          {/* Sidebar Actions */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
              <div className="space-y-2">
                <button
                  onClick={() => handleAction('accept')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-600 dark:bg-green-500 text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors font-medium"
                >
                  <CheckCircle className="w-4 h-4" />
                  Accept Candidate
                </button>
                <button
                  onClick={() => handleAction('interview')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-orange-600 dark:bg-orange-500 text-white rounded-lg hover:bg-orange-700 dark:hover:bg-orange-600 transition-colors font-medium"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule Interview
                </button>
                <button
                  onClick={() => handleAction('info')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-medium"
                >
                  <MessageSquare className="w-4 h-4" />
                  Request Information
                </button>
                <button
                  onClick={() => handleAction('reject')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-600 dark:bg-red-500 text-white rounded-lg hover:bg-red-700 dark:hover:bg-red-600 transition-colors font-medium"
                >
                  <XCircle className="w-4 h-4" />
                  Reject Application
                </button>
              </div>
            </div>

            {/* Change Status */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Change Status</h2>
              <select className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent">
                <option value="New">New</option>
                <option value="Reviewed">Reviewed</option>
                <option value="Shortlisted">Shortlisted</option>
                <option value="Interview">Interview</option>
                <option value="Accepted">Accepted</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            {/* Source */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Application Source</h2>
              <div className="flex items-center justify-center gap-2 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                {candidate.source === 'Email' && <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />}
                {candidate.source === 'LinkedIn' && <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400" />}
                {candidate.source === 'Form' && <FileText className="w-5 h-5 text-gray-600 dark:text-gray-400" />}
                <span className="font-medium text-gray-900 dark:text-white">{candidate.source}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Email Template Modal */}
      {selectedAction && emailTemplate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                  <Send className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Generated Email Template</h2>
              </div>
              <button
                onClick={() => {
                  setSelectedAction(null);
                  setEmailTemplate('');
                }}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Recipient</label>
                <input
                  type="text"
                  value={candidate.email}
                  readOnly
                  className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  value={emailTemplate}
                  onChange={(e) => setEmailTemplate(e.target.value)}
                  rows={12}
                  className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    alert('Email sent successfully! (Demo)');
                    setSelectedAction(null);
                    setEmailTemplate('');
                  }}
                  className="flex-1 px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors font-medium"
                >
                  Send Email
                </button>
                <button
                  onClick={() => {
                    setSelectedAction(null);
                    setEmailTemplate('');
                  }}
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
