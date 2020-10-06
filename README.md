# CookieBook
<ul> 
	<li><a href=#Digital>Digital Cookbook</a></li>
  <li><a href=#Mergeregeln>Mergeregeln</a></li>
  <li><a href=#Links>Links</a></li>
</ul>
<h1 id="Digital">Projekt digitales Kochbuch</h1>
<ul>
  <li>create & save recipes for yourself</li>
  <li>share recipes with family and friends</li>
</ul>
<h2 id="Mergeregeln">Vorgehen bei fertigen Features:</h2>
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
<h3 id="Links">Links</h3>
<ul>
<li>Wordpress https://mycookiebook.wordpress.com/</li>
<li>Jira https://mycookiebook.atlassian.net</li>
<li>Google Docs https://docs.google.com/document/d/1S21PEPu93tL8H19i1qgO-WdtKm67N9ZOwufyIhbs3DA/edit</li>
</ul>
