#import "AppDelegate.h"
#import <Firebase.h>

 #import <GoogleMaps/GoogleMaps.h>
#import "RNSplashScreen.h"
#import <React/RCTBundleURLProvider.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
 +  [GMSServices provideAPIKey:@"AIzaSyAjE2O2FkplyDUJ4pUiPafU2gE29VhvPP0"]; // add this line using the api key obtained from Google Console

  [FIRApp configure];


  self.moduleName = @"dalele_app";


  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};


  BOOL ret = [super application:application didFinishLaunchingWithOptions:launchOptions];
    if (ret == YES)
    {
      [RNSplashScreen show];
    }
    return ret;

}

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
