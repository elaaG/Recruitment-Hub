import { Link } from 'react-router';
import { mockCandidates, projectMatches } from '../data/candidates';
import { ThemeToggle } from '../components/ThemeToggle';
import { 
  ArrowLeft, 
  TrendingUp, 
  Users, 
  Clock, 
  Star,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

export function Analytics() {
  // Status distribution
  const statusData = [
    { name: 'New', value: mockCandidates.filter(c => c.status === 'New').length, color: '#3B82F6' },
    { name: 'Reviewed', value: mockCandidates.filter(c => c.status === 'Reviewed').length, color: '#8B5CF6' },
    { name: 'Shortlisted', value: mockCandidates.filter(c => c.status === 'Shortlisted').length, color: '#EAB308' },
    { name: 'Interview', value: mockCandidates.filter(c => c.status === 'Interview').length, color: '#F97316' },
    { name: 'Accepted', value: mockCandidates.filter(c => c.status === 'Accepted').length, color: '#22C55E' },
    { name: 'Rejected', value: mockCandidates.filter(c => c.status === 'Rejected').length, color: '#EF4444' },
  ];

  // Profile type distribution
  const profileData = [
    { name: 'AI/Backend', value: mockCandidates.filter(c => c.aiAnalysis.profileType === 'AI / Backend').length },
    { name: 'Full Stack', value: mockCandidates.filter(c => c.aiAnalysis.profileType === 'Full Stack').length },
    { name: 'Frontend', value: mockCandidates.filter(c => c.aiAnalysis.profileType === 'Frontend').length },
    { name: 'Data Science', value: mockCandidates.filter(c => c.aiAnalysis.profileType === 'Data Science').length },
    { name: 'DevOps', value: mockCandidates.filter(c => c.aiAnalysis.profileType === 'DevOps').length },
    { name: 'Mobile', value: mockCandidates.filter(c => c.aiAnalysis.profileType === 'Mobile').length },
  ];

  // Score distribution
  const scoreRanges = [
    { range: '9-10', count: mockCandidates.filter(c => c.aiAnalysis.score >= 9).length },
    { range: '8-8.9', count: mockCandidates.filter(c => c.aiAnalysis.score >= 8 && c.aiAnalysis.score < 9).length },
    { range: '7-7.9', count: mockCandidates.filter(c => c.aiAnalysis.score >= 7 && c.aiAnalysis.score < 8).length },
    { range: '6-6.9', count: mockCandidates.filter(c => c.aiAnalysis.score >= 6 && c.aiAnalysis.score < 7).length },
    { range: '<6', count: mockCandidates.filter(c => c.aiAnalysis.score < 6).length },
  ];

  // School distribution
  const schoolData = [
    { name: 'INSAT', value: mockCandidates.filter(c => c.school === 'INSAT').length },
    { name: 'ESPRIT', value: mockCandidates.filter(c => c.school === 'ESPRIT').length },
    { name: 'ENIT', value: mockCandidates.filter(c => c.school === 'ENIT').length },
    { name: 'FST', value: mockCandidates.filter(c => c.school === 'FST').length },
  ];

  // Applications over time (simulated weekly data)
  const timelineData = [
    { week: 'S-4', applications: 2 },
    { week: 'S-3', applications: 3 },
    { week: 'S-2', applications: 1 },
    { week: 'S-1', applications: 4 },
  ];

  // KPIs
  const avgProcessingTime = '3.2 jours';
  const responseRate = '100%';
  const qualityScore = '8.1/10';
  const interviewConversion = '40%';

  const topCandidates = mockCandidates
    .filter(c => c.status !== 'Rejected')
    .sort((a, b) => b.aiAnalysis.score - a.aiAnalysis.score)
    .slice(0, 5);

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
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics & Performance</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">Recruitment metrics and insights</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Avg. Processing Time</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{avgProcessingTime}</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">↓ -20% vs last month</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Response Rate</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{responseRate}</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">Excellent performance</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-2">
              <Star className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Quality Score</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{qualityScore}</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">↑ +0.5 vs target</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Interview Conversion</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{interviewConversion}</p>
            <p className="text-xs text-orange-600 dark:text-orange-400 mt-1">Stable</p>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Status Distribution */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Status Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Profile Type Distribution */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Profile Types</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={profileData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#6366F1" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Score Distribution */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Score Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={scoreRanges}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* School Distribution */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Distribution by School</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={schoolData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Applications Timeline</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={timelineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="applications" stroke="#6366F1" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Top Candidates */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Top 5 Candidates</h2>
          <div className="space-y-3">
            {topCandidates.map((candidate, idx) => (
              <Link
                key={candidate.id}
                to={`/candidate/${candidate.id}`}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="text-2xl font-bold text-gray-400 dark:text-gray-500">#{idx + 1}</div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{candidate.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{candidate.aiAnalysis.profileType} • {candidate.school}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Score</p>
                    <p className="text-xl font-bold text-green-600 dark:text-green-400">{candidate.aiAnalysis.score}/10</p>
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    candidate.status === 'Accepted' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
                    candidate.status === 'Shortlisted' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400' :
                    candidate.status === 'Interview' ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400' :
                    'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}>
                    {candidate.status}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Project Matches */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Project Matching</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(projectMatches).map(([project, candidateIds]) => (
              <div key={project} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-700/30">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{project}</h3>
                <div className="space-y-2">
                  {candidateIds.map(id => {
                    const candidate = mockCandidates.find(c => c.id === id);
                    return candidate ? (
                      <Link
                        key={id}
                        to={`/candidate/${id}`}
                        className="flex items-center justify-between p-2 bg-white dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                      >
                        <span className="text-sm text-gray-700 dark:text-gray-300">{candidate.name}</span>
                        <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">{candidate.aiAnalysis.score}/10</span>
                      </Link>
                    ) : null;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Insights */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
              <div>
                <h3 className="font-medium text-green-900 dark:text-green-300 mb-1">Strong Performance</h3>
                <p className="text-sm text-green-700 dark:text-green-400">
                  Average score of 8.1/10 for selected candidates. The system effectively identifies top talent.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
              <div>
                <h3 className="font-medium text-yellow-900 dark:text-yellow-300 mb-1">Action Required</h3>
                <p className="text-sm text-yellow-700 dark:text-yellow-400">
                  2 candidates on shortlist for over 5 days. Schedule interviews promptly.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div>
                <h3 className="font-medium text-blue-900 dark:text-blue-300 mb-1">Strategic Insight</h3>
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  High demand for AI profiles. Focus recruitment efforts on INSAT and ESPRIT.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}