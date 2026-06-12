# Generates desktop-1440.html and mobile-360.html from site content
$dir = Split-Path -Parent $MyInvocation.MyCommand.Path

$sharedBody = Get-Content (Join-Path $dir "shared-body.html") -Raw -Encoding UTF8

function Build-Html($variant, $width, $title, $frameClass) {
@"
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=$width, initial-scale=1"/>
  <title>$title</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="styles.css"/>
  <style>html, body { width: ${width}px; min-width: ${width}px; margin: 0; }</style>
</head>
<body class="mockup-frame $frameClass">
$sharedBody
</body>
</html>
"@
}

$desktop = Build-Html "desktop" 1440 "Yandex Pet Day — Desktop 1440" "mockup-frame--desktop"
$mobile = Build-Html "mobile" 360 "Yandex Pet Day — Mobile 360" "mockup-frame--mobile"

[System.IO.File]::WriteAllText((Join-Path $dir "desktop-1440.html"), $desktop, [System.Text.UTF8Encoding]::new($false))
[System.IO.File]::WriteAllText((Join-Path $dir "mobile-360.html"), $mobile, [System.Text.UTF8Encoding]::new($false))
Write-Host "Generated desktop-1440.html and mobile-360.html"
