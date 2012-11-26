  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>SyntaxHighlighter/scripts/shBrushPhp.js at master · alexgorbatchev/SyntaxHighlighter</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144.png" />
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="x3YaKEb1GBPbEoJvrK5vihNYX3bWJpczNl9CAAnDRVM=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-dd95960936fd09bc718d54eac1f1683ed3376505.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-7fc9083d70adfe618db229248dd342e4a50999a6.css" media="screen" rel="stylesheet" type="text/css" />
    


    <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-57542e0cba19d068168099f287c117efa142863c.js" type="text/javascript"></script>
    <script src="https://a248.e.akamai.net/assets.github.com/assets/github-6f3bd550f3d93d807bbc14d8cfce5a5a393cf3f7.js" type="text/javascript"></script>
    

      <link rel='permalink' href='/alexgorbatchev/SyntaxHighlighter/blob/985329b83daa5e0ad7f50b14a972177acabf0510/scripts/shBrushPhp.js'>
    <meta property="og:title" content="SyntaxHighlighter"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/alexgorbatchev/SyntaxHighlighter"/>
    <meta property="og:image" content="https://a248.e.akamai.net/assets.github.com/images/gravatars/gravatar-user-420.png?1345673562"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="SyntaxHighlighter is a fully functional self-contained code syntax highlighter developed in JavaScript."/>

    <meta name="description" content="SyntaxHighlighter is a fully functional self-contained code syntax highlighter developed in JavaScript." />

  <link href="https://github.com/alexgorbatchev/SyntaxHighlighter/commits/master.atom" rel="alternate" title="Recent Commits to SyntaxHighlighter:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob windows vis-public env-production ">
    <div id="wrapper">

      

      

      


        <div class="header header-logged-in true">
          <div class="container clearfix">

            <a class="header-logo-blacktocat" href="https://github.com/">
  <span class="mega-icon mega-icon-blacktocat"></span>
</a>

            <div class="divider-vertical"></div>

              <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
    <span class="mail-status all-read"></span>
  </a>
  <div class="divider-vertical"></div>


              
  <div class="topsearch command-bar-activated">
    <form accept-charset="UTF-8" action="/search" class="command_bar_form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="mini-icon mini-icon-advanced-search "></span></a>

  <input type="text" name="q" id="command-bar" placeholder="Search or type a command" tabindex="1" data-username="Zen4All" autocapitalize="off">

  <span class="mini-icon help tooltipped downwards" title="Show command bar help">
    <span class="mini-icon mini-icon-help"></span>
  </span>

  <input type="hidden" name="ref" value="commandbar">

  <div class="divider-vertical"></div>
</form>



    <ul class="top-nav">
        <li class="explore"><a href="https://github.com/explore">Explore</a></li>
        <li><a href="https://gist.github.com">Gist</a></li>
        <li><a href="/blog">Blog</a></li>
      <li><a href="http://help.github.com">Help</a></li>
    </ul>
  </div>


            

  
    <ul id="user-links">
      <li>
        <a href="https://github.com/Zen4All" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/f2ecee7f1087d6a157bc818a816260d8?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> Zen4All
        </a>
      </li>
      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
          <span class="mini-icon mini-icon-create"></span>
        </a>
      </li>
      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          title="Account settings ">
          <span class="mini-icon mini-icon-account-settings"></span>
        </a>
      </li>
      <li>
          <a href="/logout" data-method="post" id="logout" class="tooltipped downwards" title="Sign out">
            <span class="mini-icon mini-icon-logout"></span>
          </a>
      </li>
    </ul>



            
          </div>
        </div>


      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu">
          <div class="container">
            <div class="title-actions-bar">
              


                  <ul class="pagehead-actions">

          <li class="subscription">
              <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="x3YaKEb1GBPbEoJvrK5vihNYX3bWJpczNl9CAAnDRVM=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="1173043" />
  <div class="context-menu-container js-menu-container js-context-menu">
    <span class="minibutton switcher bigger js-menu-target">
      <span class="js-context-button">
          <span class="mini-icon mini-icon-watching"></span>Watch
      </span>
    </span>

    <div class="context-pane js-menu-content">
      <a href="javascript:;" class="close js-menu-close"><span class="mini-icon mini-icon-remove-close"></span></a>
      <div class="context-title">Notification status</div>

      <div class="context-body pane-selector">
        <ul class="js-navigation-container">
          <li class="selector-item js-navigation-item js-navigation-target selected">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input checked="checked" id="do_included" name="do" type="radio" value="included" />
              <h4>Not watching</h4>
              <p>You will only receive notifications when you participate or are mentioned.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-watching"></span>
              Watch
            </span>
          </li>
          <li class="selector-item js-navigation-item js-navigation-target ">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input id="do_subscribed" name="do" type="radio" value="subscribed" />
              <h4>Watching</h4>
              <p>You will receive all notifications for this repository.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-unwatch"></span>
              Unwatch
            </span>
          </li>
          <li class="selector-item js-navigation-item js-navigation-target ">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input id="do_ignore" name="do" type="radio" value="ignore" />
              <h4>Ignored</h4>
              <p>You will not receive notifications for this repository.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-mute"></span>
              Stop ignoring
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</form>
          </li>

          <li class="js-toggler-container js-social-container starring-container ">
            <a href="/alexgorbatchev/SyntaxHighlighter/unstar" class="minibutton js-toggler-target starred" data-remote="true" data-method="post" rel="nofollow">
              <span class="mini-icon mini-icon-star"></span>Unstar
            </a><a href="/alexgorbatchev/SyntaxHighlighter/star" class="minibutton js-toggler-target unstarred" data-remote="true" data-method="post" rel="nofollow">
              <span class="mini-icon mini-icon-star"></span>Star
            </a><a class="social-count js-social-count" href="/alexgorbatchev/SyntaxHighlighter/stargazers">1,564</a>
          </li>

              <li><a href="/alexgorbatchev/SyntaxHighlighter/fork" class="minibutton js-toggler-target fork-button lighter" rel="nofollow" data-method="post"><span class="mini-icon mini-icon-fork"></span>Fork</a><a href="/alexgorbatchev/SyntaxHighlighter/network" class="social-count">338</a>
              </li>


    </ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/alexgorbatchev" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">alexgorbatchev</span>
                  </a></span> /
                <strong><a href="/alexgorbatchev/SyntaxHighlighter" class="js-current-repository">SyntaxHighlighter</a></strong>
              </h1>
            </div>

            

  <ul class="tabs">
    <li><a href="/alexgorbatchev/SyntaxHighlighter" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/alexgorbatchev/SyntaxHighlighter/network" highlight="repo_network">Network</a></li>
    <li><a href="/alexgorbatchev/SyntaxHighlighter/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>27</span></a></li>

      <li><a href="/alexgorbatchev/SyntaxHighlighter/issues" highlight="repo_issues">Issues <span class='counter'>122</span></a></li>

      <li><a href="/alexgorbatchev/SyntaxHighlighter/wiki" highlight="repo_wiki">Wiki</a></li>


    <li><a href="/alexgorbatchev/SyntaxHighlighter/graphs" highlight="repo_graphsrepo_contributors">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
      <li><a href="/alexgorbatchev/SyntaxHighlighter/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter ">2</span></a></li>
      <li><a href="/alexgorbatchev/SyntaxHighlighter/downloads" class="tabnav-tab" highlight="repo_downloads">Downloads <span class="counter blank">0</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="context-menu-container js-menu-container js-context-menu">
      <a href="#"
         class="minibutton bigger switcher js-menu-target js-commitish-button btn-branch repo-tree"
         data-hotkey="w"
         data-ref="master">
         <span><em class="mini-icon mini-icon-branch"></em><i>branch:</i> master</span>
      </a>

      <div class="context-pane commitish-context js-menu-content">
        <a href="javascript:;" class="close js-menu-close"><span class="mini-icon mini-icon-remove-close"></span></a>
        <div class="context-title">Switch branches/tags</div>
        <div class="context-body pane-selector commitish-selector js-navigation-container">
          <div class="filterbar">
            <input type="text" id="context-commitish-filter-field" class="js-navigation-enable js-filterable-field" placeholder="Filter branches/tags">
            <ul class="tabs">
              <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
                <li><a href="#" data-filter="tags">Tags</a></li>
            </ul>
          </div>

          <div class="js-filter-tab js-filter-branches">
            <div data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/alexgorbatchev/SyntaxHighlighter/blob/development/scripts/shBrushPhp.js" class="js-navigation-open" data-name="development" rel="nofollow">development</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target selected">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/alexgorbatchev/SyntaxHighlighter/blob/master/scripts/shBrushPhp.js" class="js-navigation-open" data-name="master" rel="nofollow">master</a>
                  </h4>
                </div>
            </div>
            <div class="no-results">Nothing to show</div>
          </div>

            <div class="js-filter-tab js-filter-tags " style="display:none">
              <div data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
                  <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                    <span class="mini-icon mini-icon-confirm"></span>
                    <h4>
                        <a href="/alexgorbatchev/SyntaxHighlighter/blob/3.0.83/scripts/shBrushPhp.js" class="js-navigation-open" data-name="3.0.83" rel="nofollow">3.0.83</a>
                    </h4>
                  </div>
                  <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                    <span class="mini-icon mini-icon-confirm"></span>
                    <h4>
                        <a href="/alexgorbatchev/SyntaxHighlighter/blob/2.1.364/scripts/shBrushPhp.js" class="js-navigation-open" data-name="2.1.364" rel="nofollow">2.1.364</a>
                    </h4>
                  </div>
              </div>
              <div class="no-results">Nothing to show</div>
            </div>
        </div>
      </div><!-- /.commitish-context-context -->
    </div>
  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/alexgorbatchev/SyntaxHighlighter" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/alexgorbatchev/SyntaxHighlighter/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/alexgorbatchev/SyntaxHighlighter/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">2</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:eafcb2b9b819d691e6d32b6177047906 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:eafcb2b9b819d691e6d32b6177047906 -->

<div id="slider">


    <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>
    <div class="breadcrumb" data-path="scripts/shBrushPhp.js/">
      <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/alexgorbatchev/SyntaxHighlighter" class="js-slider-breadcrumb" itemscope="url"><span itemprop="title">SyntaxHighlighter</span></a></span></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/alexgorbatchev/SyntaxHighlighter/tree/master/scripts" class="js-slider-breadcrumb" itemscope="url"><span itemprop="title">scripts</span></a></span> / <strong class="final-path">shBrushPhp.js</strong> <span class="js-clippy mini-icon mini-icon-clippy " data-clipboard-text="scripts/shBrushPhp.js" data-copied-hint="copied!" data-copy-hint="copy to clipboard"></span>
    </div>

    <a href="/alexgorbatchev/SyntaxHighlighter/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>

      <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/alexgorbatchev/SyntaxHighlighter/contributors/master/scripts/shBrushPhp.js" data-path="scripts/shBrushPhp.js/">
        Fetching contributors…

        <div class="participation">
          <p class="loader-loading"><img alt="Octocat-spinner-32-eaf2f5" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif?1338956357" width="16" /></p>
          <p class="loader-error">Cannot retrieve contributors at this time</p>
        </div>
      </div>

    <div class="frames">
      <div class="frame frame-center" data-path="scripts/shBrushPhp.js/" data-permalink-url="/alexgorbatchev/SyntaxHighlighter/blob/985329b83daa5e0ad7f50b14a972177acabf0510/scripts/shBrushPhp.js" data-title="SyntaxHighlighter/scripts/shBrushPhp.js at master · alexgorbatchev/SyntaxHighlighter · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>73 lines (64 sloc)</span>
                <span>4.906 kb</span>
              </div>
              <ul class="button-group actions">
                  <li>
                        <a class="grouped-button minibutton bigger lighter tooltipped leftwards"
                           title="Clicking this button will automatically fork this project so you can edit the file"
                           href="/alexgorbatchev/SyntaxHighlighter/edit/master/scripts/shBrushPhp.js"
                           data-method="post" rel="nofollow">Edit</a>
                  </li>
                <li><a href="/alexgorbatchev/SyntaxHighlighter/raw/master/scripts/shBrushPhp.js" class="minibutton grouped-button bigger lighter" id="raw-url">Raw</a></li>
                  <li><a href="/alexgorbatchev/SyntaxHighlighter/blame/master/scripts/shBrushPhp.js" class="minibutton grouped-button bigger lighter">Blame</a></li>
                <li><a href="/alexgorbatchev/SyntaxHighlighter/commits/master/scripts/shBrushPhp.js" class="minibutton grouped-button bigger lighter" rel="nofollow">History</a></li>
              </ul>
            </div>
                <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'><span class="p">;(</span><span class="kd">function</span><span class="p">()</span></div><div class='line' id='LC2'><span class="p">{</span></div><div class='line' id='LC3'>	<span class="c1">// CommonJS</span></div><div class='line' id='LC4'>	<span class="nx">SyntaxHighlighter</span> <span class="o">=</span> <span class="nx">SyntaxHighlighter</span> <span class="o">||</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">require</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span><span class="o">?</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;shCore&#39;</span><span class="p">).</span><span class="nx">SyntaxHighlighter</span> <span class="o">:</span> <span class="kc">null</span><span class="p">);</span></div><div class='line' id='LC5'><br/></div><div class='line' id='LC6'>	<span class="kd">function</span> <span class="nx">Brush</span><span class="p">()</span></div><div class='line' id='LC7'>	<span class="p">{</span></div><div class='line' id='LC8'>		<span class="kd">var</span> <span class="nx">funcs</span>	<span class="o">=</span>	<span class="s1">&#39;abs acos acosh addcslashes addslashes &#39;</span> <span class="o">+</span></div><div class='line' id='LC9'>						<span class="s1">&#39;array_change_key_case array_chunk array_combine array_count_values array_diff &#39;</span><span class="o">+</span></div><div class='line' id='LC10'>						<span class="s1">&#39;array_diff_assoc array_diff_key array_diff_uassoc array_diff_ukey array_fill &#39;</span><span class="o">+</span></div><div class='line' id='LC11'>						<span class="s1">&#39;array_filter array_flip array_intersect array_intersect_assoc array_intersect_key &#39;</span><span class="o">+</span></div><div class='line' id='LC12'>						<span class="s1">&#39;array_intersect_uassoc array_intersect_ukey array_key_exists array_keys array_map &#39;</span><span class="o">+</span></div><div class='line' id='LC13'>						<span class="s1">&#39;array_merge array_merge_recursive array_multisort array_pad array_pop array_product &#39;</span><span class="o">+</span></div><div class='line' id='LC14'>						<span class="s1">&#39;array_push array_rand array_reduce array_reverse array_search array_shift &#39;</span><span class="o">+</span></div><div class='line' id='LC15'>						<span class="s1">&#39;array_slice array_splice array_sum array_udiff array_udiff_assoc &#39;</span><span class="o">+</span></div><div class='line' id='LC16'>						<span class="s1">&#39;array_udiff_uassoc array_uintersect array_uintersect_assoc &#39;</span><span class="o">+</span></div><div class='line' id='LC17'>						<span class="s1">&#39;array_uintersect_uassoc array_unique array_unshift array_values array_walk &#39;</span><span class="o">+</span></div><div class='line' id='LC18'>						<span class="s1">&#39;array_walk_recursive atan atan2 atanh base64_decode base64_encode base_convert &#39;</span><span class="o">+</span></div><div class='line' id='LC19'>						<span class="s1">&#39;basename bcadd bccomp bcdiv bcmod bcmul bindec bindtextdomain bzclose bzcompress &#39;</span><span class="o">+</span></div><div class='line' id='LC20'>						<span class="s1">&#39;bzdecompress bzerrno bzerror bzerrstr bzflush bzopen bzread bzwrite ceil chdir &#39;</span><span class="o">+</span></div><div class='line' id='LC21'>						<span class="s1">&#39;checkdate checkdnsrr chgrp chmod chop chown chr chroot chunk_split class_exists &#39;</span><span class="o">+</span></div><div class='line' id='LC22'>						<span class="s1">&#39;closedir closelog copy cos cosh count count_chars date decbin dechex decoct &#39;</span><span class="o">+</span></div><div class='line' id='LC23'>						<span class="s1">&#39;deg2rad delete ebcdic2ascii echo empty end ereg ereg_replace eregi eregi_replace error_log &#39;</span><span class="o">+</span></div><div class='line' id='LC24'>						<span class="s1">&#39;error_reporting escapeshellarg escapeshellcmd eval exec exit exp explode extension_loaded &#39;</span><span class="o">+</span></div><div class='line' id='LC25'>						<span class="s1">&#39;feof fflush fgetc fgetcsv fgets fgetss file_exists file_get_contents file_put_contents &#39;</span><span class="o">+</span></div><div class='line' id='LC26'>						<span class="s1">&#39;fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype &#39;</span><span class="o">+</span></div><div class='line' id='LC27'>						<span class="s1">&#39;floatval flock floor flush fmod fnmatch fopen fpassthru fprintf fputcsv fputs fread fscanf &#39;</span><span class="o">+</span></div><div class='line' id='LC28'>						<span class="s1">&#39;fseek fsockopen fstat ftell ftok getallheaders getcwd getdate getenv gethostbyaddr gethostbyname &#39;</span><span class="o">+</span></div><div class='line' id='LC29'>						<span class="s1">&#39;gethostbynamel getimagesize getlastmod getmxrr getmygid getmyinode getmypid getmyuid getopt &#39;</span><span class="o">+</span></div><div class='line' id='LC30'>						<span class="s1">&#39;getprotobyname getprotobynumber getrandmax getrusage getservbyname getservbyport gettext &#39;</span><span class="o">+</span></div><div class='line' id='LC31'>						<span class="s1">&#39;gettimeofday gettype glob gmdate gmmktime ini_alter ini_get ini_get_all ini_restore ini_set &#39;</span><span class="o">+</span></div><div class='line' id='LC32'>						<span class="s1">&#39;interface_exists intval ip2long is_a is_array is_bool is_callable is_dir is_double &#39;</span><span class="o">+</span></div><div class='line' id='LC33'>						<span class="s1">&#39;is_executable is_file is_finite is_float is_infinite is_int is_integer is_link is_long &#39;</span><span class="o">+</span></div><div class='line' id='LC34'>						<span class="s1">&#39;is_nan is_null is_numeric is_object is_readable is_real is_resource is_scalar is_soap_fault &#39;</span><span class="o">+</span></div><div class='line' id='LC35'>						<span class="s1">&#39;is_string is_subclass_of is_uploaded_file is_writable is_writeable mkdir mktime nl2br &#39;</span><span class="o">+</span></div><div class='line' id='LC36'>						<span class="s1">&#39;parse_ini_file parse_str parse_url passthru pathinfo print readlink realpath rewind rewinddir rmdir &#39;</span><span class="o">+</span></div><div class='line' id='LC37'>						<span class="s1">&#39;round str_ireplace str_pad str_repeat str_replace str_rot13 str_shuffle str_split &#39;</span><span class="o">+</span></div><div class='line' id='LC38'>						<span class="s1">&#39;str_word_count strcasecmp strchr strcmp strcoll strcspn strftime strip_tags stripcslashes &#39;</span><span class="o">+</span></div><div class='line' id='LC39'>						<span class="s1">&#39;stripos stripslashes stristr strlen strnatcasecmp strnatcmp strncasecmp strncmp strpbrk &#39;</span><span class="o">+</span></div><div class='line' id='LC40'>						<span class="s1">&#39;strpos strptime strrchr strrev strripos strrpos strspn strstr strtok strtolower strtotime &#39;</span><span class="o">+</span></div><div class='line' id='LC41'>						<span class="s1">&#39;strtoupper strtr strval substr substr_compare&#39;</span><span class="p">;</span></div><div class='line' id='LC42'><br/></div><div class='line' id='LC43'>		<span class="kd">var</span> <span class="nx">keywords</span> <span class="o">=</span>	<span class="s1">&#39;abstract and array as break case catch cfunction class clone const continue declare default die do &#39;</span> <span class="o">+</span></div><div class='line' id='LC44'>						<span class="s1">&#39;else elseif enddeclare endfor endforeach endif endswitch endwhile extends final for foreach &#39;</span> <span class="o">+</span></div><div class='line' id='LC45'>						<span class="s1">&#39;function global goto if implements include include_once interface instanceof insteadof namespace new &#39;</span> <span class="o">+</span></div><div class='line' id='LC46'>						<span class="s1">&#39;old_function or private protected public return require require_once static switch &#39;</span> <span class="o">+</span></div><div class='line' id='LC47'>						<span class="s1">&#39;trait throw try use var while xor &#39;</span><span class="p">;</span></div><div class='line' id='LC48'><br/></div><div class='line' id='LC49'>		<span class="kd">var</span> <span class="nx">constants</span>	<span class="o">=</span> <span class="s1">&#39;__FILE__ __LINE__ __METHOD__ __FUNCTION__ __CLASS__&#39;</span><span class="p">;</span></div><div class='line' id='LC50'><br/></div><div class='line' id='LC51'>		<span class="k">this</span><span class="p">.</span><span class="nx">regexList</span> <span class="o">=</span> <span class="p">[</span></div><div class='line' id='LC52'>			<span class="p">{</span> <span class="nx">regex</span><span class="o">:</span> <span class="nx">SyntaxHighlighter</span><span class="p">.</span><span class="nx">regexLib</span><span class="p">.</span><span class="nx">singleLineCComments</span><span class="p">,</span>	<span class="nx">css</span><span class="o">:</span> <span class="s1">&#39;comments&#39;</span> <span class="p">},</span>			<span class="c1">// one line comments</span></div><div class='line' id='LC53'>			<span class="p">{</span> <span class="nx">regex</span><span class="o">:</span> <span class="nx">SyntaxHighlighter</span><span class="p">.</span><span class="nx">regexLib</span><span class="p">.</span><span class="nx">multiLineCComments</span><span class="p">,</span>		<span class="nx">css</span><span class="o">:</span> <span class="s1">&#39;comments&#39;</span> <span class="p">},</span>			<span class="c1">// multiline comments</span></div><div class='line' id='LC54'>			<span class="p">{</span> <span class="nx">regex</span><span class="o">:</span> <span class="nx">SyntaxHighlighter</span><span class="p">.</span><span class="nx">regexLib</span><span class="p">.</span><span class="nx">doubleQuotedString</span><span class="p">,</span>		<span class="nx">css</span><span class="o">:</span> <span class="s1">&#39;string&#39;</span> <span class="p">},</span>			<span class="c1">// double quoted strings</span></div><div class='line' id='LC55'>			<span class="p">{</span> <span class="nx">regex</span><span class="o">:</span> <span class="nx">SyntaxHighlighter</span><span class="p">.</span><span class="nx">regexLib</span><span class="p">.</span><span class="nx">singleQuotedString</span><span class="p">,</span>		<span class="nx">css</span><span class="o">:</span> <span class="s1">&#39;string&#39;</span> <span class="p">},</span>			<span class="c1">// single quoted strings</span></div><div class='line' id='LC56'>			<span class="p">{</span> <span class="nx">regex</span><span class="o">:</span> <span class="sr">/\$\w+/g</span><span class="p">,</span>											<span class="nx">css</span><span class="o">:</span> <span class="s1">&#39;variable&#39;</span> <span class="p">},</span>			<span class="c1">// variables</span></div><div class='line' id='LC57'>			<span class="p">{</span> <span class="nx">regex</span><span class="o">:</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getKeywords</span><span class="p">(</span><span class="nx">funcs</span><span class="p">),</span> <span class="s1">&#39;gmi&#39;</span><span class="p">),</span>		<span class="nx">css</span><span class="o">:</span> <span class="s1">&#39;functions&#39;</span> <span class="p">},</span>			<span class="c1">// common functions</span></div><div class='line' id='LC58'>			<span class="p">{</span> <span class="nx">regex</span><span class="o">:</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getKeywords</span><span class="p">(</span><span class="nx">constants</span><span class="p">),</span> <span class="s1">&#39;gmi&#39;</span><span class="p">),</span>	<span class="nx">css</span><span class="o">:</span> <span class="s1">&#39;constants&#39;</span> <span class="p">},</span>			<span class="c1">// constants</span></div><div class='line' id='LC59'>			<span class="p">{</span> <span class="nx">regex</span><span class="o">:</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getKeywords</span><span class="p">(</span><span class="nx">keywords</span><span class="p">),</span> <span class="s1">&#39;gm&#39;</span><span class="p">),</span>		<span class="nx">css</span><span class="o">:</span> <span class="s1">&#39;keyword&#39;</span> <span class="p">}</span>			<span class="c1">// keyword</span></div><div class='line' id='LC60'>			<span class="p">];</span></div><div class='line' id='LC61'><br/></div><div class='line' id='LC62'>		<span class="k">this</span><span class="p">.</span><span class="nx">forHtmlScript</span><span class="p">(</span><span class="nx">SyntaxHighlighter</span><span class="p">.</span><span class="nx">regexLib</span><span class="p">.</span><span class="nx">phpScriptTags</span><span class="p">);</span></div><div class='line' id='LC63'>	<span class="p">};</span></div><div class='line' id='LC64'><br/></div><div class='line' id='LC65'>	<span class="nx">Brush</span><span class="p">.</span><span class="nx">prototype</span>	<span class="o">=</span> <span class="k">new</span> <span class="nx">SyntaxHighlighter</span><span class="p">.</span><span class="nx">Highlighter</span><span class="p">();</span></div><div class='line' id='LC66'>	<span class="nx">Brush</span><span class="p">.</span><span class="nx">aliases</span>	<span class="o">=</span> <span class="p">[</span><span class="s1">&#39;php&#39;</span><span class="p">];</span></div><div class='line' id='LC67'><br/></div><div class='line' id='LC68'>	<span class="nx">SyntaxHighlighter</span><span class="p">.</span><span class="nx">brushes</span><span class="p">.</span><span class="nx">Php</span> <span class="o">=</span> <span class="nx">Brush</span><span class="p">;</span></div><div class='line' id='LC69'><br/></div><div class='line' id='LC70'>	<span class="c1">// CommonJS</span></div><div class='line' id='LC71'>	<span class="k">typeof</span><span class="p">(</span><span class="nx">exports</span><span class="p">)</span> <span class="o">!=</span> <span class="s1">&#39;undefined&#39;</span> <span class="o">?</span> <span class="nx">exports</span><span class="p">.</span><span class="nx">Brush</span> <span class="o">=</span> <span class="nx">Brush</span> <span class="o">:</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC72'><span class="p">})();</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>
      </div>

      <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
      <div id="jump-to-line" style="display:none">
        <h2>Jump to Line</h2>
        <form accept-charset="UTF-8" class="js-jump-to-line-form">
          <input class="textfield js-jump-to-line-field" type="text">
          <div class="full-button">
            <button type="submit" class="classy">
              Go
            </button>
          </div>
        </form>
      </div>

    </div>
</div>

<div class="frame frame-loading large-loading-area" style="display:none;">
  <img src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543528" height="64" width="64">
</div>

        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2012 <span title="0.08649s from fe1.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus command bar</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last js-hidden-pane" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
        <dd>Submit comment</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> shift p</dt>
        <dd>Preview comment</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> shift p</dt>
          <dd>Preview comment</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div class="js-hidden-pane" >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first js-hidden-pane" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first">
        <h3>Browsing Commits</h3>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>escape</dt>
          <dd>Close form</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>p</dt>
          <dd>Parent commit</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o</dt>
          <dd>Other parent commit</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <h3>Notifications</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open notification</dd>
        </dl>
      </div><!-- /.column.first -->

      <div class="column second">
        <dl class="keyboard-mappings">
          <dt>e <em>or</em> shift i <em>or</em> y</dt>
          <dd>Mark as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift m</dt>
          <dd>Mute thread</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:

> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>


    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.08796' data-host='fe1'></span>
    
  </body>
</html>

