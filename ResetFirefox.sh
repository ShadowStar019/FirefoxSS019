#!/bin/bash

rm -r "$HOME/.mozilla"
rm -r "$HOME/.cache/mozilla"
rm -r "$HOME/Stuff/Firefox"

mkdir -p "$HOME/.mozilla/"
mkdir -p "$HOME/.mozilla/firefox/"
mkdir -p "$HOME/Stuff/Firefox/"
cp "$HOME/Stuff/FirefoxResources/profiles.ini" "$HOME/.mozilla/firefox/"
sed -i "s/<%userName%>/$(whoami)/g" "$HOME/.mozilla/firefox/profiles.ini"

creationTime=$(($(date +%s%N) / 1000000))

profileNames=(Default Personal School AlternatePersonal AlternateSchool Programming Official)
for profileName in "${profileNames[@]}"
do
    mkdir -p "$HOME/Stuff/Firefox/$profileName/"
    cp -r "$HOME/Stuff/FirefoxResources/Profile/"* "$HOME/Stuff/Firefox/$profileName/"
    cp -r "$HOME/Stuff/FirefoxResources/$profileName/"* "$HOME/Stuff/Firefox/$profileName/"
    find "$HOME/Stuff/Firefox/$profileName/" -type f -print0 | xargs -0 sed -i "s/<%creationTime%>/$creationTime/g"
    # cp -a "$HOME/Stuff/FirefoxResources/$profileName/extensions/"* "$profileName/extensions/"
    # sed -i "s/FirefoxResources\/Profile/Firefox\/$profileName/g" "$profileName/extensions.json"
done

cp "$HOME/Stuff/FirefoxResources/ResetFirefox.sh" "$HOME/Bin/ResetFirefox.sh"
