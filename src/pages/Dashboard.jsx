import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Terminal, FolderGit2, BookOpen, 
  Settings, User, Plus, Compass
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import './Dashboard.css';

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

export const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      {/* Sidebar: Premium OS Navigation */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-section">
          <div className="sidebar-heading">Workspace</div>
          <Link to="/dashboard" className="sidebar-link active">
            <div className="sidebar-link-left">
              <Terminal size={16} />
              Current Execution
            </div>
          </Link>
          <Link to="/dashboard/projects" className="sidebar-link">
            <div className="sidebar-link-left">
              <FolderGit2 size={16} />
              Repositories
            </div>
          </Link>
          <Link to="/dashboard/roadmap" className="sidebar-link">
            <div className="sidebar-link-left">
              <BookOpen size={16} />
              Curriculum Paths
            </div>
          </Link>
        </div>
        
        <div className="sidebar-section" style={{ marginTop: 'auto' }}>
          <Link to="/profile" className="sidebar-link">
            <div className="sidebar-link-left">
              <User size={16} />
              Creator Profile
            </div>
          </Link>
          <Link to="/settings" className="sidebar-link">
            <div className="sidebar-link-left">
              <Settings size={16} />
              System Preferences
            </div>
          </Link>
        </div>
      </aside>

      {/* Main Execution Workspace */}
      <main className="dashboard-content">
        <motion.div 
          className="dashboard-header"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div>
            <h1 className="dashboard-title">Workspace Initialized</h1>
            <p className="dashboard-subtitle">Select a curriculum path to begin execution.</p>
          </div>
        </motion.div>

        <div className="execution-grid">
          {/* Left Column: Empty State / Onboarding */}
          <motion.div 
            className="execution-section"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
          >
            <h3>Active Project</h3>
            
            <div className="project-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px', textAlign: 'center', padding: 'var(--space-12)' }}>
              <Compass size={48} color="var(--color-text-tertiary)" style={{ marginBottom: 'var(--space-6)' }} />
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xl)', marginBottom: 'var(--space-2)' }}>No Active Execution</div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-8)', maxWidth: '300px' }}>
                You have not assigned an active project to this workspace. Browse the curriculum to initialize a new repository.
              </p>
              <Button variant="primary" icon={Plus}>
                Initialize Project
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Activity / Log */}
          <motion.div 
            className="execution-section"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            <h3>System Log</h3>
            
            <div style={{ marginTop: 'var(--space-6)' }}>
              <div className="timeline-item">
                <div className="timeline-icon">
                  <Terminal size={14} color="var(--color-text-secondary)" />
                </div>
                <div className="timeline-content">
                  <div className="timeline-title" style={{ color: 'var(--color-text-secondary)' }}>Workspace created</div>
                  <div className="timeline-time">Just now</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};
