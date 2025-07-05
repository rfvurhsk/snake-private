local a, b, c = game, game.PlaceId, loadstring
local d = "https://raw.githubusercontent.com/"
local e = "rfvurhsk/snake-private/main/"
local f = d .. e

local function h(i)
    local s, r = pcall(function()
        return c(game:HttpGet(f .. i))()
    end)
    if not s then warn("❌ 脚本加载失败：" .. tostring(r)) end
end

local map = {
    [tonumber("0x2E35F339")] = "fnaf1.lua",
    [2^34 - 112502089] = "fnaf2.lua",
    [0x2E35F4B8] + 4754 = "fnaf3.lua",
    [12490000000 + 7365956] = "fnaf4.lua"
}

if map[b] then
    h(map[b])
else
    warn("❌ 当前游戏不是支持的 FNAF 一/二/三/四代")
end
