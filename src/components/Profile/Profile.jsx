import "./profile.css";
import Topbar from "/src/components/Topbar/Topbar";
import Sidebar from "/src/components/Sidebar/Sidebar";
import Feed from "/src/components/Feed/Feed";
import Rightbar from "/src/components/Rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="/src/assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="/src/assets/person/1.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Safak Kocaoglu</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
