export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.3YnnWcP0.js","app":"_app/immutable/entry/app.aevlBTGO.js","imports":["_app/immutable/entry/start.3YnnWcP0.js","_app/immutable/chunks/entry.KB5bx9zm.js","_app/immutable/chunks/scheduler.k97bDLAz.js","_app/immutable/entry/app.aevlBTGO.js","_app/immutable/chunks/scheduler.k97bDLAz.js","_app/immutable/chunks/index.M97hDp6e.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
