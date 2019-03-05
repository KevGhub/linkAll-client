//####################################################
//####################################################
//############## TO SEARCH BY USERS ##################
//####################################################
//################ UNCOMMENT #########################
//####################################################
//####################################################

// import React, { Component } from "react";

// import { getUserDetails } from "../api";

// class SearchUser extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userInfo: [],
//       userSearch: ""
//     };
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     console.log("handleSubmit works ?");
//   }

//   genericOnChange(event) {
//     console.log(event.target.value, "TEST generic onchange event");
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   }

//   componentDidMount() {
//     // CONNECTION FRONT & BACK is HERE :
//     getUserDetails().then(response => {
//       console.log("our users :", response.data);

//       this.setState({ userInfo: response.data });
//     });
//   }

//   render() {
//     const { userInfo, userSearch } = this.state;
//     console.log("blah WORKS????", userInfo, userSearch);

//     // const lowerSearch = userSearch.toLowerCase();
//     // const filteredArray = userInfo.filter(oneUser => {
//     //   const lowerName = oneUser.name.toLowerCase();
//     //   return lowerName.includes(lowerSearch);
//     // });

//     return (
//       <section className="user-search">
//         <h2>Search Users</h2>

//         <form onSubmit={event => this.handleSubmit(event)}>
//           <input
//             onChange={event => this.genericOnChange(event)}
//             value={this.state.oneUser}
//             name="userSearch"
//             type="text"
//             className="search-bar"
//             placeholder="Search a friend"
//           />
//         </form>
//         {userSearch === "" ? null : (
//           <ul>
//             {userInfo.map(userElement => {
//               return (
//                 <li key={userElement._id}>
//                   <h3>{userElement.name}</h3>
//                   <img src={userElement.avatarURL} />
//                 </li>
//               );
//             })}
//           </ul>
//         )}
//       </section>
//     );
//   }
// }

// export default SearchUser;
