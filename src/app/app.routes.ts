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
import { ScheduleInterviewComponent } from './components/Hr/schedule-interview/schedule-interview.component';

export const routes: Routes = [

    {
        path: '', component:LandingPageComponent
    },
    // {
    //     path: '', component:DashboardPageComponent
    // },

    {
        path: 'hr-dashboard', component: HrDashboardComponent, children: [
            { path: 'schedule-interview', component: ScheduleInterviewComponent },
            { path: 'top-widget', component: TopWidgetsComponent },
            { path: 'recent-added', component: RecentAddedJobsComponent },
            { path: 'candidate-list', component: CandidateListComponent },
            { path: 'job-chart', component: JobChartComponent },
            { path: 'hr-main', component: HrMainComponent },
        ]
    },
    {
        path: 'sign-up', component: SignupComponent
    },

    {
        path: 'login', component: LoginComponent
    }
    
];