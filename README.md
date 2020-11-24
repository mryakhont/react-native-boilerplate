# react-native boilerplate
A sample react native with some pretty techniques:
- Redux-saga
- Fetch Api interceptor
 

# build apk guideline
- in /android folder: run command to generate a key to sign your apk:
`keytool -genkey -v -keystore my-app-key.keystore -alias my-app-alias -keyalg RSA -keysize 2048 -validity 10000`

You may receive a warning about keystore format PKCS12. Run command to convert to PKCS12: 
`keytool -importkeystore -srckeystore my-app-key.keystore -destkeystore my-app-key.keystore -deststoretype pkcs12`

You will see a generated keystore named _my-app-key.keystore_ in /android folder

- in root folder (/AwesomeProject): you need to generate installable build by command:
`npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res`

You may receive an error "no such file or directory, open 'android/app/src/main/assets/index.android.bundle'" 
=> create /assets folder at /android/app/src/main/

- in /android folder: build apk file by command: 
`./gradlew assembleRelease`

You may received and error "Duplicate Resource". This is because the images are re-created by react-native
=> remove all /drawable-* folder and /raw folder at /AwesomeProject/android/app/src/main/res.
