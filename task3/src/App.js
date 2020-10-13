import React, { Component, Fragment } from "react";
import { SearchBarContainer } from "./components/SearchBar";
import { Logout } from "./components/Logout";
import { PostsPage } from "./components/PostsPage";
import { Authenticate } from "./components/Authentication";
import loadingImg from "./images/instagram-icon-logo-loading.svg";
import dummyData from "./dummy-data";
import "../src/components/style/App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      dummyData: [],
      fullName: [],
      inputText: [],
      isTop: true,
      isModelTrue: false,
      likes: [],
      password: "",
      searchText: "",
      shownDummyData: [],
      userLiked: [],
      username: "",
      userPhoto:
        "https://scontent.fiev11-1.fna.fbcdn.net/v/t1.0-9/26165328_1240199236125054_1176463712388115105_n.jpg?_nc_cat=100&_nc_oc=AQnKGf7VrNcCB9bMhvSh7dYPIFDcF6zE0JLRyHiByCM0d_3nUNGGH15Ckah_yqxgrXs&_nc_ht=scontent.fiev11-1.fna&oh=77043bb4b7e3a2962a7ed2e4c6032b8d&oe=5D8D59BB"
    };
  }

  componentDidMount() {
    document.addEventListener("scroll", this.scrollChange);
    const arr = dummyData.map(post => post.comments);
    const likes = dummyData.map(post => post.likes);
    const userLiked = likes.map(like => false);
    const commentArr = likes.map(like => "");
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    const fullName = localStorage.getItem("fullName");
    setTimeout(() => {
      this.setState({
        dummyData: dummyData,
        shownDummyData: dummyData,
        comments: arr,
        likes: likes,
        userLiked: userLiked,
        username: username,
        password: password,
        inputText: commentArr,
        fullName
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout();
  }

  scrollChange = () => {
    const isTop = window.scrollY < 55;

    if (isTop !== this.isTop) {
      this.setState({
        isTop
      });
    }
  };

  searchPosts = searchText => {
    if (searchText.split("").length > 0) {
      const shownArr = this.state.dummyData.filter(post => {
        if (
          JSON.stringify(post.username)
            .toLowerCase()
            .includes(searchText.toLowerCase())
        ) {
          // Шукає всю публікацію (подібну)
          return true;
        } else {
          return false;
        }
      });
      this.setState({
        shownDummyData: shownArr
      });
    } else {
      this.setState({
        shownDummyData: this.state.dummyData // встановлює показані повідомлення назад до початкового списку, коли довжина тексту пошуку дорівнює нулю
      });
    }
  };

  searchOnChange = event => {
    const searchField = document.querySelector(".search-field");
    const searchText = event.target.value;
    this.setState(
      {
        searchText: searchText
      },
      () => this.searchPosts(searchText)
    );
    if (event.target.value.length > 0) {
      searchField.classList.add("search-field--active");
    } else {
      searchField.classList.remove("search-field--active");
    }
  };

  likePhoto = indexClicked => {
    const newLikesNumArr = this.state.likes.map((likeNums, numIndex) => {
      if (numIndex === indexClicked) {
        return !this.state.userLiked[numIndex]
          ? (likeNums += 1)
          : (likeNums -= 1);
      } else {
        return likeNums;
      }
    });
    this.setState({
      likes: newLikesNumArr
    });
  };

  heartClick = event => {
    console.log(setTimeout);
    const indexClicked = parseInt(event.target.name); // Використовується parseInt для перетворення з рядка
    const newLikedArr = this.state.userLiked.map((like, index) => {
      if (index === indexClicked) {
        return like ? false : true;
      } else {
        return like;
      }
    });
    this.setState({
      userLiked: newLikedArr
    });
    this.likePhoto(indexClicked);
  };

  commentOnChange = event => {
    const updatedCommentText = event.target.value;
    const index = parseInt(event.target.id);
    const newInputTextArr = this.state.inputText.map(
      (commentBox, commentIndex) => {
        if (index === commentIndex) {
          return (commentBox = updatedCommentText);
        } else {
          return commentBox;
        }
      }
    );
    this.setState({
      inputText: newInputTextArr
    });
  };

  addNewComment = (event, index) => {
    event.preventDefault();
    const newArr = this.state.comments;

    newArr[index].push({
      username: this.state.username,
      text: this.state.inputText[index]
    });
    const newInputTextArr = this.state.inputText.map(
      (commentBox, commentIndex) => {
        if (index === commentIndex) {
          return (commentBox = "");
        } else {
          return commentBox;
        }
      }
    );
    this.setState({
      comments: newArr,
      inputText: newInputTextArr
    });
  };

  selectCommentInput = event => {
    const commentInputArr = document.querySelectorAll(".comment__input");
    commentInputArr.forEach((comment, index) => {
      if (comment.id === event.target.name) {
        return commentInputArr[index].focus();
      }
    });
  };

  logout = () => {
    console.log("Working!");
    const modelSetting = !this.state.isModelTrue ? true : false;
    this.setState({
      isModelTrue: modelSetting
    });
  };

  logoutModal = event => {
    if (event.target.name === "yes") {
      console.log("Working!");
      localStorage.clear();
    } else {
      this.setState({
        isModelTrue: false
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Fragment>
          <SearchBarContainer
            logout={this.logout}
            isTop={this.state.isTop}
            searchOnChange={this.searchOnChange}
            searchText={this.state.searchText}
          />
          <Logout
            isModelTrue={this.state.isModelTrue}
            logoutModal={this.logoutModal}
          />
          {this.state.shownDummyData.length === 0 ? (
            <div className="loading-img__container">
              <img src={loadingImg} alt="Instagram logo icon" />
            </div>
          ) : (
            <div className="body__content">
              <PostsPage
                isTop={this.state.isTop}
                state={this.state}
                addNewComment={this.addNewComment}
                dummyDataOnProps={this.state.shownDummyData}
                selectCommentInput={this.selectCommentInput}
                likes={this.state.likes}
                comments={this.state.comments}
                userLiked={this.state.userLiked}
                heartClick={this.heartClick}
                postComment={this.commentOnChange}
                inputText={this.state.inputText}
                username={this.state.username}
                userPhoto={this.state.userPhoto}
                fullName={this.state.fullName}
              />
            </div>
          )}
        </Fragment>
      </div>
    );
  }
}

export default Authenticate(App);
