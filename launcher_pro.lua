local a = game
local b = a.PlaceId
local f = ("https://" .. "raw." .. "github" .. "usercontent.com/")
    .. "rfvurhsk/snake-private/main/"

local function g(file)
    local s, r = pcall(function()
        return loadstring(game:HttpGet(f .. file))()
    end)
    if not s then warn("❌ 脚本加载失败：" .. tostring(r)) end
end

local id1 = 1e10 + 2497348201
local id2 = 1e10 + 2497354347
local id3 = 1e10 + 2497360072
local id4 = 1e10 + 2497365956

if b == id1 then
    g("fnaf1.lua")
elseif b == id2 then
    g("fnaf2.lua")
elseif b == id3 then
    g("fnaf3.lua")
elseif b == id4 then
    g("fnaf4.lua")
else
    warn("❌ 当前游戏不是支持的 FNAF 一/二/三/四代")
end
