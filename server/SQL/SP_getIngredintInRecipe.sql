-- ================================================
-- Template generated from Template Explorer using:
-- Create Procedure (New Menu).SQL
--
-- Use the Specify Values for Template Parameters 
-- command (Ctrl-Shift-M) to fill in the parameter 
-- values below.
--
-- This block of comments will not be included in
-- the definition of the procedure.
-- ================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		CGroup4
-- Create date: 25.12.2022
-- Description:	SP get ingreditns in recipe
-- =============================================
CREATE PROCEDURE sp_getIngredintInRecipe 
	@id int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT OFF;

    -- Insert statements for procedure here
	
	SELECT id, name, img, calories 
	FROM _ingredients as i join _ingredientsInRecipe as ir on i.id = ir.ingredientId
	WHERE  ir.recipeId =  @id
END
GO
