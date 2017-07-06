// Set-up & run the request:
var somebodyStopMe = getData( "GET", "https://artemis/enweb/api-delayed.php", "", 65000 );

// When it...:
$.when( somebodyStopMe )

// ...has completed:
.done(function(data){if(debug){console.log('Got data:', data);}})

// ...has failed or been aborted:
.fail
(
	function(xhr, status, error)
	{
																																		if(debug){console.log('Status:', status, "Error:", error);}
		if( status == "abort" )
		{
			message('ABORTED');
		}
		else
		{
			message( "<h3>FAILED</h3><p>Dunno what happened:</p><li>Status: " + status + "</li><li>Error: " + error + "</li>", "error" );
		}
	}
);

// Force it to abort:
somebodyStopMe.abort();
