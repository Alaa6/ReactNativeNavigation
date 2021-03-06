package com.rnn;

import android.app.Application;
import android.util.Log;
import com.facebook.react.PackageList;
import com.facebook.hermes.reactexecutor.HermesExecutorFactory;
import com.facebook.react.bridge.JavaScriptExecutorFactory;
import com.facebook.react.ReactApplication;

//import com.RNFetchBlob.RNFetchBlobPackage;
//import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;



import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;
import java.util.List;
import java.util.Arrays;


import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;
import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage;

public class MainApplication extends NavigationApplication {


  
  
 @Override
 protected ReactGateway createReactGateway() {
   ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
     @Override
     protected String getJSMainModuleName() {
       return "index";
     }
   };
   return new ReactGateway(this, isDebug(), host);
 }
 @Override
 public boolean isDebug() {
   return BuildConfig.DEBUG;
 }
 protected List<ReactPackage> getPackages() {
   @SuppressWarnings("UnnecessaryLocalVariable")
   List<ReactPackage> packages = new PackageList(this).getPackages();
   // Packages that cannot be autolinked yet can be added manually here, for example:
   // packages.add(new MyReactNativePackage());
     packages.add(new RNFirebaseMessagingPackage()); 
    // packages.add(new RNFirebasePackage()); 
     packages.add(new RNFirebaseNotificationsPackage());
     

     
   return packages;
 }
 @Override
 public List<ReactPackage> createAdditionalReactPackages() {
   return getPackages();
 }
}