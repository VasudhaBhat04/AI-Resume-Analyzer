import type { Route } from './+types/home';
import Navbar from '~/components/Navbar';
import ResumeCard from '~/components/ResumeCard';
import { resumes } from '../../constants';
import {usePuterStore} from "~/lib/puter";
import {useNavigate} from "react-router";
import {useEffect} from "react";

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Resumiz' }, { name: 'description', content: '' }];
}

export default function Home() {

    const { isLoading, auth } = usePuterStore();
    const navigate = useNavigate();

    useEffect(() => {
        if(!auth.isAuthenticated) navigate('/auth?next=/');
    }, [auth.isAuthenticated])

    return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover ">
      <Navbar />

      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Check Your Application Progress & Resume Quality</h1>
          <h2>Track your applications and let AI rate your resume</h2>
        </div>
        {resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
