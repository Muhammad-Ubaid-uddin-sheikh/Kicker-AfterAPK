//#import "AppDelegate.h"
//
//#import <React/RCTBundleURLProvider.h>
//#import <UserNotifications/UserNotifications.h>
//
//@implementation AppDelegate
//
//- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
//{
//  self.moduleName = @"Kickers";
//  // You can add your custom initial props in the dictionary below.
//  // They will be passed down to the ViewController used by React Native.
//  self.initialProps = @{};
//
//  return [super application:application didFinishLaunchingWithOptions:launchOptions];
//}
//
//- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
//{
//  return [self getBundleURL];
//}
//
//- (NSURL *)getBundleURL
//{
//#if DEBUG
//  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
//#else
//  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
//#endif
//}
//
//@end
#import "AppDelegate.h"
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <UserNotifications/UserNotifications.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  // Initialize the React Native root view with custom initial props
  NSDictionary *initialProps = @{
    @"customProp1": @"value1",
    @"customProp2": @"value2"
    // Add more custom props here if needed
  };

  NSURL *jsCodeLocation;
  
#if DEBUG
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
  jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"Kickers"
                                               initialProperties:initialProps
                                                   launchOptions:launchOptions];
  
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  
  return YES;
}

@end
