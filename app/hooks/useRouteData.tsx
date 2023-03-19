import { useMatches } from "@remix-run/react"
// Stolen from here https://jankraus.net/2022/04/16/access-remix-route-data-in-other-routes/
// This only works with pulling loaders from parent routes. Would need to figure out how to get from API routes
export const useRouteData = (routeId: string) => {
  const matches = useMatches()
  const data = matches.find((match) => match.id === routeId)?.data

  return data as T | undefined
}
