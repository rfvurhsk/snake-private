local a = game
local b = a.PlaceId
local c = getfenv and getfenv() or {}
local d = ((0x2F1B0000 / 2) - 39061223)
local e = (2^32 - 3047618569)

local f = ("https://" .. "raw." .. "github" .. "usercontent.com/")
    .. "rfvurhsk/snake-private/main/"

local function g(id, file)
    loadstring(game:HttpGet(f .. file))()
end

if b == d then
    g(d, "fnaf1.lua")
elseif b == e then
    g(e, "fnaf2.lua")
else
    (warn or print)("❌ 当前游戏不是支持的 FNAF 一代或二代")
end
