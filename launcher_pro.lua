local a = game
local b = a.PlaceId
local f = "https://raw.githubusercontent.com/rfvurhsk/snake-private/main/"
local function g(file)
    local s, r = pcall(function()
        return loadstring(game:HttpGet(f .. file))()
    end)
    if not s then warn("❌ 脚本加载失败：" .. tostring(r)) end
end

-- 混淆后的 PlaceId
local id1 = 10000000000 + 2497348201 -- FNAF 一代 = 12497348201
local id2 = 10000000000 + 2497354347 -- FNAF 二代 = 12497354347
local id3 = 10000000000 + 2497360072 -- FNAF 三代 = 12497360072

if b == id1 then
    g("fnaf1.lua")
elseif b == id2 then
    g("fnaf2.lua")
elseif b == id3 then
    g("fnaf3.lua")
else
    warn("❌ 当前游戏不是支持的 FNAF 一/二/三代")
end
