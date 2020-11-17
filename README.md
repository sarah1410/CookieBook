# CookieBook
<ul> 
	<li><a href=#Digital>Digital Cookbook</a></li>
  	<li><a href=#Merge rules>Merge rules</a></li>
  	<li><a href=#Links>Links</a></li>
</ul>
<h2 id="Digital">Project digital cookbook</h2>
<ul>
  <li>create & save recipes for yourself</li>
  <li>share recipes with family and friends</li>
</ul>
<h2 id="Merge rules">Merge rules</h2>
<ul>
	<li>While !PullRequestInMasterApproved</li>
	<li>{
		<ul>
			<li>While !PullRequestInReviewApproved</li>
			<li>{
				<ul>
					<li>complete feature</li>
					<li>check local review and <b>overwrite</b> with remote/review (git checkout mastergit pull -f)
						<ul>
							<li>git checkout master</li>
							<li>git branch -d review </li>
							<li>git checkout -b review</li>
							<li>git pull origin review</li>
						</ul>	
					</li>
					<li>Testing functions (local!: review -> feature_XXX, solve merge conflicts locally), while(problemExists){solve problem manually}</li>
					<li>pull request feature_XXX->review</li>
					<li>switch Task to<code>toVerify</code></li> 
					<li>PullRequestInReviewApproved = Response of the other Devs</>
				</ul>
			</li>
			<li>}</li>
			<li>switch Task to <code>Done</code></li>
			<li>show progress and changes in the weekly meetings</li>
			<li>PullRequestInMasterApproved = Response from the other members</>
		</ul>
	</li>
	<li>}</li>
	<li>merge to master</li>
</ul>
<h2 id="Links">Links</h2>
<ul>
<li>Wordpress https://mycookiebook.wordpress.com/</li>
<li>YouTrack https://dhbw-karlsruhe.myjetbrains.com/youtrack/dashboard?id=daa9d0a7-920f-4823-8c67-75f6c7c3bf62</li>
<li>GoogleDrive https://drive.google.com/drive/folders/1RLntYzZecRrzEGmy14V4NU9Bf6p_2Sqh</li>
</ul>
