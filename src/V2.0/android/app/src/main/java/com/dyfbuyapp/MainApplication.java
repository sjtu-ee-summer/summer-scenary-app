package com.dyfbuyapp;

import android.app.Application;

import cn.jiguang.imui.messagelist.ReactIMUIPackage;
import com.facebook.react.ReactApplication;
import com.airbnb.android.react.lottie.LottiePackage;
import cn.qiuxiang.react.amap3d.AMap3DPackage;
import org.reactnative.camera.RNCameraPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.rnfs.RNFSPackage;
import ui.fileselector.RNFileSelectorPackage;
import com.zmxv.RNSound.RNSoundPackage;
import com.rnim.rn.audio.ReactNativeAudioPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.react.rnspinkit.RNSpinkitPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import org.reactnative.camera.RNCameraPackage;
import com.zyu.ReactNativeWheelPickerPackage;


import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new ReactIMUIPackage(),
            new LottiePackage(),
            new AMap3DPackage(),
            new RNCameraPackage(),
            new RNGestureHandlerPackage(),
            new RNFetchBlobPackage(),
            new RNFSPackage(),
            new RNFileSelectorPackage(),
            new RNSoundPackage(),
            new ReactNativeAudioPackage(),
            new LinearGradientPackage(),
            new RNSpinkitPackage(),
            new VectorIconsPackage(),
            new ReactNativeWheelPickerPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
