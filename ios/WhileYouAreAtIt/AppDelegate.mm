#import "AppDelegate.h"
#import <React/RCTBundleURLProvider.h>
#import <GoogleSignIn/GoogleSignIn.h> // Google Sign-In 헤더 추가

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"WhileYouAreAtIt";
  self.initialProps = @{};

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

// URL 처리 메서드
- (BOOL)application:(UIApplication *)app
            openURL:(NSURL *)url
            options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{
  NSLog(@"Google Sign-In URL: %@", url.absoluteString);
  return [[GIDSignIn sharedInstance] handleURL:url];
}

// JS 번들 URL 설정
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
