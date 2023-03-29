function Profile ({fullName,bio,profession,children}){
    return(
        <div>
            <h2>je m'appelle {fullName}</h2>
            <h2>je suis {bio}</h2>
            <h3>je fais comme activité {profession}</h3>
            <h4>{children}</h4>
        </div>
    )
}
export default Profile