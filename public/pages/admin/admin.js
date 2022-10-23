let session = sessionStorage.getItem("userId")
console.log(session)
if (session == null) {
    window.location.replace("/login");
}