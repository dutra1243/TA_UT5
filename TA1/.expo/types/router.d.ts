/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/..\components\Counter` | `/..\components\noMeImporta\Collapsible` | `/..\components\noMeImporta\ExternalLink` | `/..\components\noMeImporta\HelloWave` | `/..\components\noMeImporta\ParallaxScrollView` | `/..\components\noMeImporta\ThemedText` | `/..\components\noMeImporta\ThemedView` | `/_sitemap`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
