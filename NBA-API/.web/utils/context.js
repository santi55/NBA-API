import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "/utils/state.js"

export const initialState = {"state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "state.state": {"date": "2023-12-15", "day_clean": "Friday December 15, 2023", "db_getUsers": null, "len_usuarios": 0, "link_match": "https://www.balldontlie.io/api/v1/games?dates[]=2023-12-15", "lista_partidos_perDay": [{"id": 1037918, "date": "2023-12-15T00:00:00.000Z", "home_team": {"id": 4, "abbreviation": "CHA", "city": "Charlotte", "conference": "East", "division": "Southeast", "full_name": "Charlotte Hornets", "name": "Hornets"}, "home_team_score": 0, "period": 0, "postseason": false, "season": 2023, "status": "2023-12-16T00:00:00Z", "time": null, "visitor_team": {"id": 19, "abbreviation": "NOP", "city": "New Orleans", "conference": "West", "division": "Southwest", "full_name": "New Orleans Pelicans", "name": "Pelicans"}, "visitor_team_score": 0}, {"id": 1037919, "date": "2023-12-15T00:00:00.000Z", "home_team": {"id": 23, "abbreviation": "PHI", "city": "Philadelphia", "conference": "East", "division": "Atlantic", "full_name": "Philadelphia 76ers", "name": "76ers"}, "home_team_score": 0, "period": 0, "postseason": false, "season": 2023, "status": "2023-12-16T00:00:00Z", "time": null, "visitor_team": {"id": 9, "abbreviation": "DET", "city": "Detroit", "conference": "East", "division": "Central", "full_name": "Detroit Pistons", "name": "Pistons"}, "visitor_team_score": 0}, {"id": 1037920, "date": "2023-12-15T00:00:00.000Z", "home_team": {"id": 30, "abbreviation": "WAS", "city": "Washington", "conference": "East", "division": "Southeast", "full_name": "Washington Wizards", "name": "Wizards"}, "home_team_score": 0, "period": 0, "postseason": false, "season": 2023, "status": "2023-12-16T00:00:00Z", "time": null, "visitor_team": {"id": 12, "abbreviation": "IND", "city": "Indiana", "conference": "East", "division": "Central", "full_name": "Indiana Pacers", "name": "Pacers"}, "visitor_team_score": 0}, {"id": 1037921, "date": "2023-12-15T00:00:00.000Z", "home_team": {"id": 2, "abbreviation": "BOS", "city": "Boston", "conference": "East", "division": "Atlantic", "full_name": "Boston Celtics", "name": "Celtics"}, "home_team_score": 0, "period": 0, "postseason": false, "season": 2023, "status": "2023-12-16T00:30:00Z", "time": null, "visitor_team": {"id": 22, "abbreviation": "ORL", "city": "Orlando", "conference": "East", "division": "Southeast", "full_name": "Orlando Magic", "name": "Magic"}, "visitor_team_score": 0}, {"id": 1037922, "date": "2023-12-15T00:00:00.000Z", "home_team": {"id": 28, "abbreviation": "TOR", "city": "Toronto", "conference": "East", "division": "Atlantic", "full_name": "Toronto Raptors", "name": "Raptors"}, "home_team_score": 0, "period": 0, "postseason": false, "season": 2023, "status": "2023-12-16T00:30:00Z", "time": null, "visitor_team": {"id": 1, "abbreviation": "ATL", "city": "Atlanta", "conference": "East", "division": "Southeast", "full_name": "Atlanta Hawks", "name": "Hawks"}, "visitor_team_score": 0}, {"id": 1037923, "date": "2023-12-15T00:00:00.000Z", "home_team": {"id": 27, "abbreviation": "SAS", "city": "San Antonio", "conference": "West", "division": "Southwest", "full_name": "San Antonio Spurs", "name": "Spurs"}, "home_team_score": 0, "period": 0, "postseason": false, "season": 2023, "status": "2023-12-16T00:30:00Z", "time": null, "visitor_team": {"id": 14, "abbreviation": "LAL", "city": "Los Angeles", "conference": "West", "division": "Pacific", "full_name": "Los Angeles Lakers", "name": "Lakers"}, "visitor_team_score": 0}, {"id": 1037924, "date": "2023-12-15T00:00:00.000Z", "home_team": {"id": 15, "abbreviation": "MEM", "city": "Memphis", "conference": "West", "division": "Southwest", "full_name": "Memphis Grizzlies", "name": "Grizzlies"}, "home_team_score": 0, "period": 0, "postseason": false, "season": 2023, "status": "2023-12-16T01:00:00Z", "time": null, "visitor_team": {"id": 11, "abbreviation": "HOU", "city": "Houston", "conference": "West", "division": "Southwest", "full_name": "Houston Rockets", "name": "Rockets"}, "visitor_team_score": 0}, {"id": 1037925, "date": "2023-12-15T00:00:00.000Z", "home_team": {"id": 24, "abbreviation": "PHX", "city": "Phoenix", "conference": "West", "division": "Pacific", "full_name": "Phoenix Suns", "name": "Suns"}, "home_team_score": 0, "period": 0, "postseason": false, "season": 2023, "status": "2023-12-16T03:00:00Z", "time": null, "visitor_team": {"id": 20, "abbreviation": "NYK", "city": "New York", "conference": "East", "division": "Atlantic", "full_name": "New York Knicks", "name": "Knicks"}, "visitor_team_score": 0}], "show_right": false, "users": []}}

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