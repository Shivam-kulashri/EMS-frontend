import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginHeaderComponent } from './components/login-header/login-header.component';
import { LoginComponent } from './pages/login/login.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HrDashboardComponent } from './pages/hr-dashboard/hr-dashboard.component';
import { TopWidgetsComponent } from './components/Hr/top-widgets/top-widgets.component';
import { RecentAddedJobsComponent } from './components/Hr/recent-added-jobs/recent-added-jobs.component';
import { CandidateListComponent } from './components/Hr/candidate-list/candidate-list.component';
import { JobChartComponent } from './components/Hr/job-chart/job-chart.component';
import { Component } from '@angular/core';
import { HrMainComponent } from './components/Hr/hr-main/hr-main.component';
import { PostJobComponent } from './components/Hr/post-job/post-job.component';
import { ProfileComponent } from './components/Hr/profile/profile.component';
import { ViewJobComponent } from './components/Hr/view-job/view-job.component';
import { ViewInterviewsComponent } from './components/Hr/view-interviews/view-interviews.component';
import { OnboardCandidateComponent } from './components/Hr/onboard-candidate/onboard-candidate.component';

export const routes: Routes = [

    {
        path: '', component:LandingPageComponent
    },
    // {
    //     path: '', component:DashboardPageComponent
    // },

    {
        path: 'hr-dashboard', component: HrDashboardComponent, children: [
            { path: '', component:HrMainComponent},
            { path: 'onboard-candidate', component: OnboardCandidateComponent },
            { path: 'top-widget', component: TopWidgetsComponent },
            { path: 'recent-added', component: RecentAddedJobsComponent },
            { path: 'candidate-list', component: CandidateListComponent },
            { path: 'job-chart', component: JobChartComponent },
            { path: 'post-job', component: PostJobComponent},
            { path: 'profile', component:ProfileComponent},
            { path: 'view-jobs', component:ViewJobComponent},
            { path: 'view-interview', component:ViewInterviewsComponent}
        ]
    },
    {
        path: 'sign-up', component: SignupComponent
    },

    {
        path: 'login', component: LoginComponent
    }
    
];
