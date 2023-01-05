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
-- Create date: 26.12.2022
-- Description:	sp add ingreditn to recipe
-- =============================================
CREATE PROCEDURE sp_addIngredientsInRecipe 
	@recipeId int,
	@ingredientId int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT OFF;

    -- Insert statements for procedure here
	INSERT INTO _ingredientsInRecipe(recipeId, ingredientId)
	VALUES (@recipeId, @ingredientId)
END
GO
