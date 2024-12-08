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
import { GetRolesComponent } from './pages/get-roles/get-roles.component';
import { UserOptionComponent } from './pages/user-option/user-option.component';
import { InterviewerDashboardComponent } from './pages/interviewer-dashboard/interviewer-dashboard.component';
import { InterviewerMainComponent } from './components/Interviewer/interviewer-main/interviewer-main.component';
import { InterviewerProfileComponent } from './components/Interviewer/interviewer-profile/interviewer-profile.component';
import { InterviewerSidebarComponent } from './components/Interviewer/interviewer-sidebar/interviewer-sidebar.component';
import { InterviewerUpdateInterviewDetailsComponent } from './components/Interviewer/interviewer-update-interview-details/interviewer-update-interview-details.component';
import { InterviewerCandidateListComponent } from './components/Interviewer/interviewer-candidate-list/interviewer-candidate-list.component';
import { InterviewerSeeAllInterviewComponent } from './components/Interviewer/interviewer-see-all-interview/interviewer-see-all-interview.component';
import { InterviewerScheduleInterviewComponent } from './components/Interviewer/interviewer-schedule-interview/interviewer-schedule-interview.component';
import { InterviewerUpdateApplicationComponent } from './components/Interviewer/interviewer-update-application/interviewer-update-application.component';

export const routes: Routes = [

    {
        path: '', component:LandingPageComponent
    },
    {
        path: 'user-option', component:UserOptionComponent
    },
    {
        path: 'get-roles', component:GetRolesComponent
    },
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
        path: 'interviewer-dashboard', component: InterviewerDashboardComponent, children:[
            {path: '', component:InterviewerMainComponent},
            {path: 'iprofile', component:InterviewerProfileComponent},
            {path: 'isidebar', component:InterviewerSidebarComponent},
            {path: 'iupdate', component: InterviewerUpdateInterviewDetailsComponent},
            {path: 'icandidate-list', component: InterviewerCandidateListComponent},
            {path: 'iall-interview', component: InterviewerSeeAllInterviewComponent},
            {path: 'ischedule', component: InterviewerScheduleInterviewComponent},
            {path: 'iupdateApplication', component: InterviewerUpdateApplicationComponent}
        ]
    },
    {
        path: 'sign-up', component: SignupComponent
    },
    {
        path: 'get-roles', component: GetRolesComponent
    },

    {
        path: 'login', component: LoginComponent
    }
    
];
