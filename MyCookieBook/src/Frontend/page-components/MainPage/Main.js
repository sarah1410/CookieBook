function Main() {
  const history = useHistory();
  const location = useLocation();
  const headerText = "MyCookieBook";

//  const redirectWithoutRerender = (event) => {
////    event.preventDefault();
////    redirect_navBar(event.target.id);
//  };

  return (
    <header id="navbar" className="navbar-all">
      <h2
        className="navbar-title"
        id="nav-title"
//        onClick={redirectWithoutRerender}
      >
        {headerText}
      </h2>
      <nav className="navbar-nav">
        <a
          className="navbar-link"
          href={"/"}
          id="nav-main"
//          onClick={redirectWithoutRerender}
          type="button"
        >
          Startseite
        </a>
        <a
          className="navbar-link"
          href={"/newRecipe/"}
          id="nav-newRecipe"
//          onClick={redirectWithoutRerender}
          type="button"
        >
          NeuesRezept
        </a>
        <a
          className="navbar-link"
          href={"/recipe/"}
          id="nav-recipe"
//          onClick={redirectWithoutRerender}
          type="button"
        >
          Rezepte
        </a>
        <a
          className="navbar-link"
          href={"/error/"}
          id="nav-error"
//          onClick={redirectWithoutRerender}
          type="button"
        >
          Fehler
        </a>
        <a
          className="navbar-link"
          href={"/login/"}
          id="nav-login"
//          onClick={redirectWithoutRerender}
          type="button"
        >
          Login
        </a>
        <a
          className="navbar-link"
          href={"/profile/"}
          id="nav-profile"
//          onClick={redirectWithoutRerender}
          type="button"
        >
          Profil
        </a>
        <a
          className="navbar-link"
          href={"/help/helpCompetition/"}
          id="nav-help"
//          onClick={redirectWithoutRerender}
          type="button"
        >
          Hilfe
        </a>
      </nav>
    </header>
  );

//  function redirect_navBar(from) {
//    switch (from.toLowerCase()) {
//      case "nav-title":
//        if (isNotOnSamePage("/")) {
//          do_redirect_navBar("/");
//        }
//        break;
//      case "nav-":
//        if(isNotOnSamePage("/main/participants/")) {
//          do_redirect_navBar("/main/");
//        }
//        break;
//      case "nav-help":
//        if(isNotOnSamePage("/help/helpCompetition/")) {
//          do_redirect_navBar("/help/");
//        }
//        break;
//      case "nav-newRecipe":
//        if(isNotOnSamePage("/newRecipe/")) {
//          do_redirect_navBar("/newRecipe/");
//        }
//        break;
//      case "nav-recipe":
//        if(isNotOnSamePage("/recipe/")) {
//          do_redirect_navBar("/recipe/");
//        }
//        break;
//      case "nav-error":
//        if(isNotOnSamePage("/error/")) {
//          do_redirect_navBar("/error/");
//        }
//        break;
//      case "nav-login":
//        if(isNotOnSamePage("/login/")) {
//          do_redirect_navBar("/login/");
//        }
//        break;
//      case "nav-profile":
//        if(isNotOnSamePage("/profile/")) {
//          do_redirect_navBar("/profile/");
//        }
//        break;
//      default:
//        do_redirect_navBar("/");
//    }
//  }
//
//  function isNotOnSamePage(target) {
//    return (location.pathname !== target);
//  }
//
//  function do_redirect_navBar(where, target) {
//    if (target) {
//      window.open(where, target);
//    } else {
//      history.push(where);
//    }
//  }
}

export default NavBar;