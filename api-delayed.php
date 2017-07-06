<?php
$curTime = time();
$delayUntil = $curtime + 60000;	// Add 60 seconds.

while( time < $delayUntil )
{
	// do nothing!
}

echo "DONE!";
