## これは何か？

ionic-nativeのdevelopers guideに従って作成したcordova-plugin-reproのTypeScriptラッパーです。

## 使い方

まずはcordova-plugin-reproをダウンロードします。  

````
ionic cordova plugin add cordova-plugin-repro
````

Reproを使用したいプロジェクトのnode_modules > @ionic-native配下に置いてください。それだけで使用じたいは可能ですが、npm installすると消えるので、pacakge.jsonに以下の記述を追加するとよいです。  

````
"@ionic-native/repro": "files:node_modules/@ionic-native/repro",
````

## バグがあったら

すいません。教えてください。
