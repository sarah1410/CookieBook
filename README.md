# CookieBook
<ul> 
	<li><a href=#Digital>Digital Cookbook</a></li>
  	<li><a href=#Merge rules>Merge rules</a></li>
  	<li><a href=#Links>Links</a></li>
</ul>
<h2 id="Digital">Project digitales Kochbuch</h2>
<ul>
  <li>create & save recipes for yourself</li>
  <li>share recipes with family and friends</li>
</ul>
<h2 id="Merge rules">Merge rules</h2>
<ul>
	<li>While !PullRequestAufMasterBestätigt</li>
	<li>{
		<ul>
			<li>While !PullRequestAufReviewBestätigt</li>
			<li>{
				<ul>
					<li>Feature fertig machen</li>
					<li>lokal review auschecken und mit remote/review <b>überschreiben</b> (git checkout mastergit pull -f)
						<ul>
							<li>git checkout master</li>
							<li>git branch -d review (alt.: git branch -D review)</li>
							<li>git checkout -b review</li>
							<li>git pull origin review</li>
						</ul>	
					</li>
					<li>Testen auf Funktion (lokal!: review -> feature_XXX, dann kann man lokal direkt schon die Merge Konflikte lösen), while(fehlerExists){händisch Fehler beheben}</li>
					<li>pull request (auf github.com) feature_XXX->review</li>
					<li>Task auf <code>Code Review</code></li> 
					<li>PullRequestAufReviewBestätigt = Response der anderen Devs</>
				</ul>
			</li>
			<li>}</li>
			<li>Task auf <code>Ready for (PO)</code></li>
			<li>Änderungen in wöchentlichem Treffen PO vorstellen</li>
			<li>PullRequestAufMasterBestätigt = Response von PO</>
		</ul>
	</li>
	<li>}</li>
	<li>PO merged auf master</li>
</ul>
<h2 id="Links">Links</h2>
<ul>
<li>Wordpress https://mycookiebook.wordpress.com/</li>
<li>YouTrack https://dhbw-karlsruhe.myjetbrains.com/youtrack/dashboard?id=daa9d0a7-920f-4823-8c67-75f6c7c3bf62</li>
<li>GoogleDrive https://drive.google.com/drive/folders/1RLntYzZecRrzEGmy14V4NU9Bf6p_2Sqh</li>
</ul>
