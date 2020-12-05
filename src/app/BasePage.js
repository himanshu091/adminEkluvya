import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";
import EKHomePage from "./pages/EKHomePage";
import AddClass from "./pages/AddClass";
import AddSubject from "./pages/AddSubject";
import Classes from "./pages/Classes";
import Subjects from "./pages/Subjects";
import Chapters from "./pages/Chapters";
import Slots from "./pages/Slots";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Sessions from "./pages/Sessions";
import Curriculum from "./pages/Curriculum";

import StudentDetail from "./pages/StudentDetail";
import TeacherDetail from "./pages/TeacherDetail";


const GoogleMaterialPage = lazy(() =>
  import("./modules/GoogleMaterialExamples/GoogleMaterialPage")
);
const ReactBootstrapPage = lazy(() =>
  import("./modules/ReactBootstrapExamples/ReactBootstrapPage")
);
const ECommercePage = lazy(() =>
  import("./modules/ECommerce/pages/eCommercePage")
);
const UserProfilepage = lazy(() =>
  import("./modules/UserProfile/UserProfilePage")
);

export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <ContentRoute path="/curriculam" component={Curriculum}/>
        <ContentRoute path="/classes" component={Classes}/>
        <ContentRoute path="/classdetail/:classId/:name" component={Subjects}/>
        <ContentRoute path="/subjectdetail/:subjectId/:name" component={Chapters}/>
        <ContentRoute path="/chapterdetail/:chapterId/:name" component={Slots}/>
        <ContentRoute path="/students" component={Students}/>
        <ContentRoute path="/studentdetail/:id" component={StudentDetail}/>
        <ContentRoute path="/teachers" component={Teachers}/>
        <ContentRoute path="/teachersdetail/:id" component={TeacherDetail}/>
        <ContentRoute path="/sessions" component={Sessions}/>

        <ContentRoute path="/ekhomepage" component={EKHomePage} />
        <ContentRoute path="/addsubject" component={AddSubject} />
        <ContentRoute path="/addclass" component={AddClass} />
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/builder" component={BuilderPage} />
        <ContentRoute path="/my-page" component={MyPage} />
        <Route path="/google-material" component={GoogleMaterialPage} />
        <Route path="/react-bootstrap" component={ReactBootstrapPage} />
        <Route path="/e-commerce" component={ECommercePage} />
        <Route path="/user-profile" component={UserProfilepage} />
        <Redirect to="error/error-v1" />
        
      </Switch>
    </Suspense>
  );
}
