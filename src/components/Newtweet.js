export default function Newtweet() {
	return (
		<div className="newtweet">
			<div className="newtweet-content">
				<div className="newtweet-header">
					<img
						className="newtweet-image"
						src="https://pbs.twimg.com/profile_images/1302034886610628609/RBXxMky6_400x400.jpg"
						alt="profile-pic"
					/>
				</div>
				<div className="newtweet-body">
					<textarea className="newtweet-textarea" cols="50" placeholder="What's happening?" />
				</div>
			</div>
			<div className="newtweet-button">
				<p className="newtweet-charlimit-text">140</p>
				<button className="tweetbutton">Tweet</button>
			</div>
		</div>
	);
}
