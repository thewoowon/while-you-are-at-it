#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <RNGoogleSignin/RNGoogleSignin.h> // Google Sign-In 모듈 추가

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"WhileYouAreAtIt";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  // Google Sign-In 초기화
  [RNGoogleSignin application:application didFinishLaunchingWithOptions:launchOptions];

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

// Google Sign-In URL 처리 메서드 추가
- (BOOL)application:(UIApplication *)app
            openURL:(NSURL *)url
            options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{
  return [RNGoogleSignin application:app openURL:url options:options];
}

// React Native의 JS 번들 URL 설정
- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
