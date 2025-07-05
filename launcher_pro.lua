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
    [0x2E35F339] = "fnaf1.lua",
    [(2^34) - (1 << 27) - 358889] = "fnaf2.lua",
    [((0x2E35F000 + 0x00000B94) + 4754)] = "fnaf3.lua",
    [(2^30 * 2) + 4194304 + 639560] = "fnaf4.lua"
}

if map[b] then
    h(map[b])
else
    warn("❌ 当前游戏不是支持的 FNAF 一/二/三/四代")
end
