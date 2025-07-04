local a = game
local b = a.PlaceId
local c = getfenv and getfenv() or {}

local d = 10000000000 + 2497348201
local e = 10000000000 + 2497354347

local f = ("https://" .. "raw." .. "github" .. "usercontent.com/")
    .. "rfvurhsk/snake-private/main/"

local function g(_, file)
    loadstring(game:HttpGet(f .. file))()
end

if b == d then
    g(d, "fnaf1.lua")
elseif b == e then
    g(e, "fnaf2.lua")
else
    (warn or print)("❌ 当前游戏不是支持的 FNAF 一代或二代")
end
