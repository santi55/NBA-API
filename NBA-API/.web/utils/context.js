import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "/utils/state.js"

export const initialState = {"state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "state.state": {"date": "2023-12-08", "day_clean": "Friday December 08, 2023", "db_getUsers": null, "len_usuarios": 0, "link_match": "https://www.balldontlie.io/api/v1/games?dates[]=2023-12-08", "lista_partidos_perDay": [{"id": 7050282, "date": "2023-12-08T00:00:00.000Z", "home_team": {"id": 4, "abbreviation": "CHA", "city": "Charlotte", "conference": "East", "division": "Southeast", "full_name": "Charlotte Hornets", "name": "Hornets"}, "home_team_score": 0, "period": 0, "postseason": false, "season": 2023, "status": "2023-12-09T00:00:00Z", "time": null, "visitor_team": {"id": 28, "abbreviation": "TOR", "city": "Toronto", "conference": "East", "division": "Atlantic", "full_name": "Toronto Raptors", "name": "Raptors"}, "visitor_team_score": 0}, {"id": 7050290, "date": "2023-12-08T00:00:00.000Z", "home_team": {"id": 8, "abbreviation": "DEN", "city": "Denver", "conference": "West", "division": "Northwest", "full_name": "Denver Nuggets", "name": "Nuggets"}, "home_team_score": 0, "period": 0, "postseason": false, "season": 2023, "status": "2023-12-09T02:00:00Z", "time": null, "visitor_team": {"id": 11, "abbreviation": "HOU", "city": "Houston", "conference": "West", "division": "Southwest", "full_name": "Houston Rockets", "name": "Rockets"}, "visitor_team_score": 0}, {"id": 7050291, "date": "2023-12-08T00:00:00.000Z", "home_team": {"id": 29, "abbreviation": "UTA", "city": "Utah", "conference": "West", "division": "Northwest", "full_name": "Utah Jazz", "name": "Jazz"}, "home_team_score": 0, "period": 0, "postseason": false, "season": 2023, "status": "2023-12-09T03:00:00Z", "time": null, "visitor_team": {"id": 13, "abbreviation": "LAC", "city": "LA", "conference": "West", "division": "Pacific", "full_name": "LA Clippers", "name": "Clippers"}, "visitor_team_score": 0}, {"id": 7050292, "date": "2023-12-08T00:00:00.000Z", "home_team": {"id": 25, "abbreviation": "POR", "city": "Portland", "conference": "West", "division": "Northwest", "full_name": "Portland Trail Blazers", "name": "Trail Blazers"}, "home_team_score": 0, "period": 0, "postseason": false, "season": 2023, "status": "2023-12-09T03:00:00Z", "time": null, "visitor_team": {"id": 7, "abbreviation": "DAL", "city": "Dallas", "conference": "West", "division": "Southwest", "full_name": "Dallas Mavericks", "name": "Mavericks"}, "visitor_team_score": 0}, {"id": 7050283, "date": "2023-12-08T00:00:00.000Z", "home_team": {"id": 22, "abbreviation": "ORL", "city": "Orlando", "conference": "East", "division": "Southeast", "full_name": "Orlando Magic", "name": "Magic"}, "home_team_score": 0, "period": 0, "postseason": false, "season": 2023, "status": "2023-12-09T00:00:00Z", "time": null, "visitor_team": {"id": 9, "abbreviation": "DET", "city": "Detroit", "conference": "East", "division": "Central", "full_name": "Detroit Pistons", "name": "Pistons"}, "visitor_team_score": 0}, {"id": 7050284, "date": "2023-12-08T00:00:00.000Z", "home_team": {"id": 23, "abbreviation": "PHI", "city": "Philadelphia", "conference": "East", "division": "Atlantic", "full_name": "Philadelphia 76ers", "name": "76ers"}, "home_team_score": 0, "period": 0, "postseason": false, "season": 2023, "status": "2023-12-09T00:00:00Z", "time": null, "visitor_team": {"id": 1, "abbreviation": "ATL", "city": "Atlanta", "conference": "East", "division": "Southeast", "full_name": "Atlanta Hawks", "name": "Hawks"}, "visitor_team_score": 0}, {"id": 7050285, "date": "2023-12-08T00:00:00.000Z", "home_team": {"id": 3, "abbreviation": "BKN", "city": "Brooklyn", "conference": "East", "division": "Atlantic", "full_name": "Brooklyn Nets", "name": "Nets"}, "home_team_score": 0, "period": 0, "postseason": false, "season": 2023, "status": "2023-12-09T00:30:00Z", "time": null, "visitor_team": {"id": 30, "abbreviation": "WAS", "city": "Washington", "conference": "East", "division": "Southeast", "full_name": "Washington Wizards", "name": "Wizards"}, "visitor_team_score": 0}, {"id": 7050286, "date": "2023-12-08T00:00:00.000Z", "home_team": {"id": 16, "abbreviation": "MIA", "city": "Miami", "conference": "East", "division": "Southeast", "full_name": "Miami Heat", "name": "Heat"}, "home_team_score": 0, "period": 0, "postseason": false, "season": 2023, "status": "2023-12-09T01:00:00Z", "time": null, "visitor_team": {"id": 6, "abbreviation": "CLE", "city": "Cleveland", "conference": "East", "division": "Central", "full_name": "Cleveland Cavaliers", "name": "Cavaliers"}, "visitor_team_score": 0}, {"id": 7050287, "date": "2023-12-08T00:00:00.000Z", "home_team": {"id": 15, "abbreviation": "MEM", "city": "Memphis", "conference": "West", "division": "Southwest", "full_name": "Memphis Grizzlies", "name": "Grizzlies"}, "home_team_score": 0, "period": 0, "postseason": false, "season": 2023, "status": "2023-12-09T01:00:00Z", "time": null, "visitor_team": {"id": 18, "abbreviation": "MIN", "city": "Minnesota", "conference": "West", "division": "Northwest", "full_name": "Minnesota Timberwolves", "name": "Timberwolves"}, "visitor_team_score": 0}, {"id": 7050288, "date": "2023-12-08T00:00:00.000Z", "home_team": {"id": 21, "abbreviation": "OKC", "city": "Oklahoma City", "conference": "West", "division": "Northwest", "full_name": "Oklahoma City Thunder", "name": "Thunder"}, "home_team_score": 0, "period": 0, "postseason": false, "season": 2023, "status": "2023-12-09T01:00:00Z", "time": null, "visitor_team": {"id": 10, "abbreviation": "GSW", "city": "Golden State", "conference": "West", "division": "Pacific", "full_name": "Golden State Warriors", "name": "Warriors"}, "visitor_team_score": 0}, {"id": 7050289, "date": "2023-12-08T00:00:00.000Z", "home_team": {"id": 27, "abbreviation": "SAS", "city": "San Antonio", "conference": "West", "division": "Southwest", "full_name": "San Antonio Spurs", "name": "Spurs"}, "home_team_score": 0, "period": 0, "postseason": false, "season": 2023, "status": "2023-12-09T01:30:00Z", "time": null, "visitor_team": {"id": 5, "abbreviation": "CHI", "city": "Chicago", "conference": "East", "division": "Central", "full_name": "Chicago Bulls", "name": "Bulls"}, "visitor_team_score": 0}, {"id": 7996365, "date": "2023-12-08T00:00:00.000Z", "home_team": {"id": 24, "abbreviation": "PHX", "city": "Phoenix", "conference": "West", "division": "Pacific", "full_name": "Phoenix Suns", "name": "Suns"}, "home_team_score": 0, "period": 0, "postseason": false, "season": 2023, "status": "2023-12-09T02:00:00Z", "time": null, "visitor_team": {"id": 26, "abbreviation": "SAC", "city": "Sacramento", "conference": "West", "division": "Pacific", "full_name": "Sacramento Kings", "name": "Kings"}, "visitor_team_score": 0}, {"id": 7981426, "date": "2023-12-08T00:00:00.000Z", "home_team": {"id": 2, "abbreviation": "BOS", "city": "Boston", "conference": "East", "division": "Atlantic", "full_name": "Boston Celtics", "name": "Celtics"}, "home_team_score": 0, "period": 0, "postseason": false, "season": 2023, "status": "2023-12-09T00:30:00Z", "time": null, "visitor_team": {"id": 20, "abbreviation": "NYK", "city": "New York", "conference": "East", "division": "Atlantic", "full_name": "New York Knicks", "name": "Knicks"}, "visitor_team_score": 0}], "show_right": false, "users": []}}

export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  state: createContext(null),
  state__state: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}}

export const onLoadInternalEvent = () => [Event('state.on_load_internal')]

export const initialEvents = () => [
    Event('state.hydrate', hydrateClientStorage(clientStorage)),
    ...onLoadInternalEvent()
]

export const isDevMode = true

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return (
    <UploadFilesContext.Provider value={[filesById, setFilesById]}>
      {children}
    </UploadFilesContext.Provider>
  )
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectError] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return (
    <EventLoopContext.Provider value={[addEvents, connectError]}>
      {children}
    </EventLoopContext.Provider>
  )
}

export function StateProvider({ children }) {
  const [state, dispatch_state] = useReducer(applyDelta, initialState["state"])
  const [state__state, dispatch_state__state] = useReducer(applyDelta, initialState["state.state"])
  const dispatchers = useMemo(() => {
    return {
      "state": dispatch_state,
      "state.state": dispatch_state__state,
    }
  }, [])

  return (
    <StateContexts.state.Provider value={ state }>
    <StateContexts.state__state.Provider value={ state__state }>
      <DispatchContext.Provider value={dispatchers}>
        {children}
      </DispatchContext.Provider>
    </StateContexts.state__state.Provider>
    </StateContexts.state.Provider>
  )
}